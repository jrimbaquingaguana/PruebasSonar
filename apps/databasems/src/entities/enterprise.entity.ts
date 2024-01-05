import { Entity, Column, PrimaryGeneratedColumn, OneToMany, PrimaryColumn } from 'typeorm';
import { Administrador } from '../entities/administrator.entity';
import { Usuario } from '../entities/user.entity';

@Entity()
export class Empresa {
    @PrimaryGeneratedColumn()
    id_emp: string;

    @Column({ length: 25 })
    nombre_emp: string;

    @Column({ length: 50 })
    direccion_emp: string;

    @Column('numeric')
    telefono_emp: number;

    @OneToMany(() => Usuario, (usuario) => usuario.id_emp)
    id_user: Usuario[];

    @OneToMany((type) => Administrador, (administrador) => administrador.id_emp)
    id_admin: Administrador[];
}
