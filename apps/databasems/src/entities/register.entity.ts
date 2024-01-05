import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, PrimaryColumn, JoinTable } from 'typeorm';
import { Actividad } from '../entities/activity.entity';
import { Usuario } from '../entities/user.entity';

@Entity()
export class Registro {
    @PrimaryGeneratedColumn()
    id_reg: string;

    @ManyToOne((type) => Actividad, (actividad) => actividad.id_reg, {
        eager: true,
    } )
    @JoinTable()
    id_acti: Actividad;

    @ManyToOne(() => Usuario, (usuario) => usuario.id_reg, {
        eager: true,
    })
    @JoinTable()
    id_user: Usuario;

    @Column('date')
    fecha_hora_reg: Date;

    @Column('text')
    tipo_act_reg: string;

    @Column('time')
    tiempo_reg: string;

    @Column('decimal', { precision: 7, scale: 2 })
    distancia_reg: number;
}
