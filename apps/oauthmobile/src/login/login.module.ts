import { Module, forwardRef } from '@nestjs/common';
import { UserModule } from 'apps/databasems/src/user/user.module';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from 'apps/databasems/src/user/services/user.service';
import { UserController } from 'apps/databasems/src/user/controllers/user.controller';


@Module({
  imports: [
    UserModule
  ],
  controllers: [LoginController],
  providers: [LoginService],
  exports: [LoginService],
})
export class LoginModule {}
