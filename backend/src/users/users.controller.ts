import { Controller, Get, Put, Body, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../common/jwt.guard';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req) {
    // req.user is populated by JwtStrategy validate() method
    return this.usersService.findById(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Put('profile')
  updateProfile(@Req() req, @Body() updateData: any) {
    return this.usersService.updateProfile(req.user.userId, updateData);
  }
}
