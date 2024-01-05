import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { Registro } from '../entities/register.entity';

@Entity()
export class Actividad {
    @PrimaryGeneratedColumn()
    id_acti: string; 

    @Column({ length: 25 })
    nombre_acti: string;

    @Column('text')
    descripcion_acti: string;

    @Column('time')
    tiempo_acti: string;

    @Column('decimal', { precision: 7, scale: 2 })
    cal_quemadas_acti: number;

    @Column('numeric', { nullable: true })
    puntos_ot_acti: number;

    @OneToMany(() => Registro, (registro) => registro.id_acti)
    id_reg: Registro[];
}

