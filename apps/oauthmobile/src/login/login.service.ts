
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'apps/databasems/src/user/services/user.service';

@Injectable()
export class LoginService {
    constructor(private usersService: UserService){}

    async validateUserCredentials(body: any): Promise<any> {
        const user = await this.usersService.findOneUserByMail(body.correo_user);

        if (user && user.contrasena_user === body.contrasena_user) {
            return true;
        }
        return false;
    }
}
