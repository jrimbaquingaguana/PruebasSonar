import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinTable } from 'typeorm';
import { Empresa } from '../entities/enterprise.entity';
import { Administrador } from '../entities/administrator.entity';
import { Registro } from '../entities/register.entity';

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id_user: string;

    @ManyToOne((type) => Empresa, (empresa) => empresa.id_user, {
        eager: true
    })
    @JoinTable()
    id_emp: Empresa;

    @ManyToOne((type) => Administrador, (administrador) => administrador.id_user,{
        eager: true
    })
    @JoinTable()
    id_admin: Administrador;

    @Column({ length: 25 })
    nombre_user: string;

    @Column({ length: 25 })
    apellido_user: string;

    @Column({ length: 50 })
    correo_user: string;

    @Column({ length: 25 , default:""})
    contrasena_user: string;

    @Column('date')
    fecha_nacimiento_user: Date;

    @Column({ length: 20 })
    genero_user: string;

    @OneToMany(() => Registro, registro => registro.id_user)
    id_reg: Registro[];
}
