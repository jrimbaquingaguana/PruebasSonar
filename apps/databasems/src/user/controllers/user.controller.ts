import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { UserService } from '../services/user.service';

@Controller('api_db/user')
export class UserController {
    constructor(
        private userService: UserService
    ){}

    @Get()
    getAll() {
        return this.userService.findAll();
    }

    @Get(':id')
    getOne(@Param('id') id: string){
        return this.userService.findOne(id);
    }

    @Post('search')
    findByEmail(@Body() searchItemDto: any) {
      return this.userService.findOneUserByMail(searchItemDto.correo_user);
    }

    @Post()
    create(@Body() body: any){
        return this.userService.create(body);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body:any){
        return this.userService.update(id,body);
    }

    @Delete(':id')
    delete(@Param('id') id: string){
        return this.userService.delete(id);
    }
}

