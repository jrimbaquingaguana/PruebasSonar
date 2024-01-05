import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Registro } from '../../entities/register.entity';

@Injectable()
export class RegisterService {
    constructor(
        @InjectRepository(Registro) private register_repo: Repository<Registro>
    ) {}

    findAll(){
        return this.register_repo.find();
    }

    findOne(id: string) {
        return this.register_repo.findOne(
            { where: { id_reg: id}}
        );
    }

    create(body: any) {
        const newAdministrator = this.register_repo.create(body);
        return this.register_repo.save(newAdministrator);
    }

    async update(id: string, body:any) {
        const administrator = await this.register_repo.findOne(
            { where: { id_reg: id}}
        );
        this.register_repo.merge(administrator, body);
        return this.register_repo.save(administrator);
    }

    async delete(id: string) {
        await this.register_repo.delete(id);
        return true;
    }
}
