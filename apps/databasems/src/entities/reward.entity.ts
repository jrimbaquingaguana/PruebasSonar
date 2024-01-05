import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Premio {
    @PrimaryGeneratedColumn()
    id_pre: string;

    @Column({ length: 25 })
    nombre_pre: string;

    @Column('text' )
    descripcion_pre: string;

    @Column('numeric' )
    puntos_rq_pre: number;
}