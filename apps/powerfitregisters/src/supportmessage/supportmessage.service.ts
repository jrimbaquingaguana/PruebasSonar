import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Support_Message } from '../schemas/support_message';
import { Model } from 'mongoose';

@Injectable()
export class SupportmessageService {
    constructor(@InjectModel(Support_Message.name) private itemModel: Model<Support_Message>) {}

    async create(createItemDto: any): Promise<Support_Message> {
      const createdItem = new this.itemModel(createItemDto);
      return createdItem.save();
    }
  
    async findAll(): Promise<Support_Message[]> {
      return this.itemModel.find().exec();
    }
  
    async findOne(id: string): Promise<Support_Message> {
      return this.itemModel.findById(id).exec();
    }
  
    async findByEmail(email: string): Promise<Support_Message[]> {
        return this.itemModel.find({ email }).exec();
      }
  
    async update(id: string, updateItemDto: any): Promise<Support_Message> {
      return this.itemModel.findByIdAndUpdate(id, updateItemDto, { new: true }).exec();
    }
  
    async remove(id: string): Promise<Support_Message> {
      return this.itemModel.findByIdAndRemove(id).exec();
    }
}
