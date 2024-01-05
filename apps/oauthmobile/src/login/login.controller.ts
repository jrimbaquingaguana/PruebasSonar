import { Controller , Post, Body } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller()
export class LoginController {

  constructor(private authService:LoginService){}

  @Post('loginmobile')
  async loginAuth(@Body() body:any) {
    return this.authService.validateUserCredentials(body);
  }

}
