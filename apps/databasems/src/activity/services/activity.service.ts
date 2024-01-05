import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Actividad } from '../../entities/activity.entity';

@Injectable()
export class ActivityService {
    constructor(
        @InjectRepository(Actividad) private activity_repo: Repository<Actividad>
    ) {}

    findAll(){
        return this.activity_repo.find();
    }

    findOne(id: string) {
        return this.activity_repo.findOne(
            { where: { id_acti: id}}
        );
    }

    create(body: any) {
        const newAdministrator = this.activity_repo.create(body);
        return this.activity_repo.save(newAdministrator);
    }

    async update(id: string, body:any) {
        const administrator = await this.activity_repo.findOne(
            { where: { id_acti: id}}
        );
        this.activity_repo.merge(administrator, body);
        return this.activity_repo.save(administrator);
    }

    async delete(id: string) {
        await this.activity_repo.delete(id);
        return true;
    }
}


