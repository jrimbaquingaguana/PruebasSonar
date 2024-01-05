
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AdministratorService } from 'apps/databasems/src/administrator/services/administrator.service';

@Injectable()
export class LoginService {
    constructor(private usersService: AdministratorService, private jwtTokenService: JwtService){}

    async validateUserCredentials(body: any): Promise<any> {
        const user = await this.usersService.findOneAdminByMail(body.correo_admin);

        if (user && user.contrasena_admin === body.contrasena_admin) {
            const {contrasena_admin, ...result} = user;
            return result;
        }
        return null;
    }

    async loginWithCredentials(user: any) {
        const payload = { correo_admin: user.correo_admin, id_admin: user.id_admin };
        return {
            access_token: this.jwtTokenService.sign(payload),
        };
    }
}
