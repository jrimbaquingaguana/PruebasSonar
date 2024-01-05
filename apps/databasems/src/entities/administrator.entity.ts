import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, PrimaryColumn, JoinTable} from 'typeorm';
import { Usuario } from '../entities/user.entity';
import { Empresa } from '../entities/enterprise.entity';

@Entity()
export class Administrador {
    @PrimaryGeneratedColumn()
    id_admin: string;

    @OneToMany(() => Usuario, (usuario) => usuario.id_admin)
    id_user: Usuario[];

    @ManyToOne((type) => Empresa, (empresa) => empresa.id_admin, {
        eager: true,
    })
    @JoinTable()
    id_emp: Empresa[]


    @Column({ length: 25 })
    nombre_admin: string;

    @Column({ length: 25 })
    apellido_admin: string;

    @Column({ length: 50 })
    correo_admin: string;

    @Column({ length: 25})
    contrasena_admin: string;

}
