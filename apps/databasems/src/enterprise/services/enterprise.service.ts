import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Empresa } from '../../entities/enterprise.entity';

@Injectable()
export class EnterpriseService {
    constructor(
        @InjectRepository( Empresa) private enterprise_repo: Repository<Empresa>
    ) {}

    findAll(){
        return this.enterprise_repo.find();
    }

    findOne(id: string) {
        return this.enterprise_repo.findOne(
            { where: { id_emp: id}}
        );
    }

    create(body: any) {
        const newAdministrator = this.enterprise_repo.create(body);
        return this.enterprise_repo.save(newAdministrator);
    }

    async update(id: string, body:any) {
        const administrator = await this.enterprise_repo.findOne(
            { where: { id_emp: id}}
        );
        this.enterprise_repo.merge(administrator, body);
        return this.enterprise_repo.save(administrator);
    }

    async delete(id: string) {
        await this.enterprise_repo.delete(id);
        return true;
    }
}
