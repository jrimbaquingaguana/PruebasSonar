import { Controller, Get, Post, Request, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LoginService } from './login.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller()
export class LoginController {

  constructor(private authService:LoginService){}

  @Post('loginauth')
  async loginAuth(@Body() body:any) {
    return this.authService.validateUserCredentials(body);
  }

  @Post('login')
  async login(@Body() body:any) {
    return this.authService.loginWithCredentials(body);
  }

  @UseGuards(JwtAuthGuard)
  @Get('user-info')
  getUserInfo(@Request() req) {
    return req.user
  }
}