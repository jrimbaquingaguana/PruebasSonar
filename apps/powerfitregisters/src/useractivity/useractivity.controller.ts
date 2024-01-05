import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UseractivityService } from './useractivity.service';

@Controller('useractivity')
export class UseractivityController {
    constructor(private readonly itemsService:UseractivityService) {}

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
