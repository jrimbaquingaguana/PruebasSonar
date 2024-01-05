import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { SupportmessageService } from './supportmessage.service';


@Controller('supportmessage')
export class SupportmessageController {
    constructor(private readonly itemsService:SupportmessageService) {}

    @Post()
    create(@Body() createItemDto: any) {
      return this.itemsService.create(createItemDto);
    }
  
    @Get()
    findAll() {
      return this.itemsService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.itemsService.findOne(id);
    }
  
    @Post('search')
    findByEmail(@Body() searchItemDto: any) {
      return this.itemsService.findByEmail(searchItemDto.email);
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() updateItemDto: any) {
      return this.itemsService.update(id, updateItemDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.itemsService.remove(id);
    }
}
