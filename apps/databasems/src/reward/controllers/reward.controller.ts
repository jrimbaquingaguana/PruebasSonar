import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { RewardService } from '../services/reward.service';

@Controller('api_db/reward')
export class RewardController {

        constructor(
            private rewardService: RewardService
        ){}
    
        @Get()
        getAll() {
            return this.rewardService.findAll();
        }
    
        @Get(':id')
        getOne(@Param('id') id: string){
            return this.rewardService.findOne(id);
        }
    
        @Post()
        create(@Body() body: any){
            return this.rewardService.create(body);
        }
    
    
        @Put(':id')
        update(@Param('id') id: string, @Body() body:any){
            return this.rewardService.update(id,body);
        }
    
        @Delete(':id')
        delete(@Param('id') id: string){
            return this.rewardService.delete(id);
        }    
}
