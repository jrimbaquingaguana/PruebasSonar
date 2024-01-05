import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Administrador } from 'apps/databasems/src/entities/administrator.entity';
import { Actividad } from 'apps/databasems/src/entities/activity.entity';
import { Empresa } from 'apps/databasems/src/entities/enterprise.entity';
import { Registro } from 'apps/databasems/src/entities/register.entity';
import { Premio } from 'apps/databasems/src/entities/reward.entity';
import { Usuario } from 'apps/databasems/src/entities/user.entity';
import { LoginModule } from './login/login.module';
import { UserModule } from 'apps/databasems/src/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'powefitdatabase-do-user-14057935-0.b.db.ondigitalocean.com',
      port: 25060,
      username: 'martin',
      password: 'AVNS_3oyy-9amBTfYuN9_AVA',
      database: 'microservicepowerfitdb',
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false, // Permite la conexión con certificados no verificados (para entornos de prueba)
        },
      },
      entities: [Actividad, Administrador, Empresa, Registro, Premio, Usuario],
      synchronize: true,
      retryDelay: 3000,
      retryAttempts: 10
    }),
    LoginModule, UserModule,
  ],
controllers: [],
  providers: [],
})
export class OauthmobileModule {}
