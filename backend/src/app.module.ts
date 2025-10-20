import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './config/database.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ArtworksModule } from './artworks/artworks.module';

@Module({
  imports: [DatabaseModule, AuthModule, UsersModule, ArtworksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
