import { Module } from '@nestjs/common';
import { AdministratorService } from './services/administrator.service';
import { AdministratorController } from './controllers/administrator.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Actividad } from '../entities/activity.entity';
import { Administrador } from '../entities/administrator.entity';
import { Empresa } from '../entities/enterprise.entity';
import { Registro } from '../entities/register.entity';
import { Premio } from '../entities/reward.entity';
import { Usuario } from '../entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Actividad, Administrador, Empresa, Registro, Premio, Usuario])
  ],
  providers: [AdministratorService],
  exports: [AdministratorService],
  controllers: [AdministratorController]
})
export class AdministratorModule {}
