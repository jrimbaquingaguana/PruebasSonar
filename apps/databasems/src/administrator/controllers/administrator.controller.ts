import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { AdministratorService} from './../services/administrator.service';

@Controller('api_db/admin')
export class AdministratorController {
    constructor(
        private administratorService: AdministratorService
    ){}

    @Get()
    getAll() {
        return this.administratorService.findAll();
    }

    @Get(':id')
    getOne(@Param('id') id: string){
        return this.administratorService.findOne(id);
    }

    @Post()
    create(@Body() body: any){
        return this.administratorService.create(body);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body:any){
        return this.administratorService.update(id,body);
    }

    @Delete(':id')
    delete(@Param('id') id: string){
        return this.administratorService.delete(id);
    }

}
