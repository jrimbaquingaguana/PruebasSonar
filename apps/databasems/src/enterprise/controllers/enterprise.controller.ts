import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { EnterpriseService } from '../services/enterprise.service';

@Controller('api_db/enterprise')
export class EnterpriseController {
    constructor(
        private enterpriseService: EnterpriseService
    ){}

    @Get()
    getAll() {
        return this.enterpriseService.findAll();
    }

    @Get(':id')
    getOne(@Param('id') id: string){
        return this.enterpriseService.findOne(id);
    }

    @Post()
    create(@Body() body: any){
        return this.enterpriseService.create(body);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body:any){
        return this.enterpriseService.update(id,body);
    }

    @Delete(':id')
    delete(@Param('id') id: string){
        return this.enterpriseService.delete(id);
    }
}
