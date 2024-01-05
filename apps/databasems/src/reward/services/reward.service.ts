import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Premio } from '../../entities/reward.entity';


@Injectable()
export class RewardService {
    constructor(
        @InjectRepository(Premio) private reward_repo: Repository<Premio>
    ) {}

    findAll(){
        return this.reward_repo.find();
    }

    findOne(id: string) {
        return this.reward_repo.findOne(
            { where: { id_pre: id}}
        );
    }

    create(body: any) {
        const newAdministrator = this.reward_repo.create(body);
        return this.reward_repo.save(newAdministrator);
    }

    async update(id: string, body:any) {
        const administrator = await this.reward_repo.findOne(
            { where: { id_pre: id}}
        );
        this.reward_repo.merge(administrator, body);
        return this.reward_repo.save(administrator);
    }


    async delete(id: string) {
        await this.reward_repo.delete(id);
        return true;
    }

}
