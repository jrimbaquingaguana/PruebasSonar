import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AdministratorModule } from 'apps/databasems/src/administrator/administrator.module';
import { LoginService } from './login.service';

import { LocalStrategy } from './local.sttrategy';
import { JwtStrategy } from './jwt.strategy';
import { LoginController } from './login.controller';

@Module({
  imports: [
    AdministratorModule, 
    PassportModule,
    JwtModule.register({
      secret: 'secretpowerfit',
      signOptions: {expiresIn: '10m'}
    })],
  controllers: [LoginController],
  providers: [LoginService, LocalStrategy, JwtStrategy],
  exports: [LoginService]
})
export class LoginModule {}




