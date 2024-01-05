import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";


export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'secretpowerfit'
        })
    }

    async validate(payload: any) {
        return {id_admin: payload.id_admin, nombre_admin: payload.nombre_admin}
    }
}