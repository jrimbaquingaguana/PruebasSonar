import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { ActivityService } from '../services/activity.service';

@Controller('api_db/activity')
export class ActivityController {
    constructor(
        private activityService: ActivityService
    ){}

    @Get()
    getAll() {
        return this.activityService.findAll();
    }

    @Get(':id')
    getOne(@Param('id') id: string){
        return this.activityService.findOne(id);
    }

    @Post()
    create(@Body() body: any){
        return this.activityService.create(body);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body:any){
        return this.activityService.update(id,body);
    }

    @Delete(':id')
    delete(@Param('id') id: string){
        return this.activityService.delete(id);
    }
}
