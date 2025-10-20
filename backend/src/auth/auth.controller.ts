import { Body, Controller, Post, Get, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { JwtAuthGuard } from '../common/jwt.guard';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    const { email, password, username } = registerDto;
    return this.authService.register(email, password, username);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    console.log('🔑 Login endpoint hit:', loginDto);
    const { email, password } = loginDto;
    console.log('✅ Calling auth service login');
    return this.authService.login(email, password);
  }

  @Post('forgot-password')
  async forgotPassword(@Body() body: { email: string }) {
    return this.authService.forgotPassword(body.email);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Req() req) {
    return this.usersService.findById(req.user.userId);
  }
}