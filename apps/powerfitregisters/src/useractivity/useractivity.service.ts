import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User_Activity } from '../schemas/user_activity';
import { Model } from 'mongoose';


@Injectable()
export class UseractivityService {
    constructor(@InjectModel(User_Activity.name) private itemModel: Model<User_Activity>) {}

    async create(createItemDto: any): Promise<User_Activity> {
      const createdItem = new this.itemModel(createItemDto);
      return createdItem.save();
    }
  
    async findAll(): Promise<User_Activity[]> {
      return this.itemModel.find().exec();
    }
  
    async findOne(id: string): Promise<User_Activity> {
      return this.itemModel.findById(id).exec();
    }
  
    async findByEmail(email: string): Promise<User_Activity> {
        console.log(email);
        return this.itemModel.findOne({ email }).exec();

      }
  
    async update(id: string, updateItemDto: any): Promise<User_Activity> {
      return this.itemModel.findByIdAndUpdate(id, updateItemDto, { new: true }).exec();
    }
  
    async remove(id: string): Promise<User_Activity> {
      return this.itemModel.findByIdAndRemove(id).exec();
    }
}
