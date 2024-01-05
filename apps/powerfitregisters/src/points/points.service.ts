import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Points } from '../schemas/points_schema';
import { Model } from 'mongoose';

@Injectable()
export class PointsService {
    constructor(@InjectModel(Points.name) private itemModel: Model<Points>) {}

    async create(createItemDto: any): Promise<Points> {
      const createdItem = new this.itemModel(createItemDto);
      return createdItem.save();
    }
  
    async findAll(): Promise<Points[]> {
      return this.itemModel.find().exec();
    }
  
    async findOne(id: string): Promise<Points> {
      return this.itemModel.findById(id).exec();
    }
  
    async findByEmail(email: string): Promise<Points[]> {
        return this.itemModel.find({ email }).exec();
      }
  
    async update(id: string, updateItemDto: any): Promise<Points> {
      return this.itemModel.findByIdAndUpdate(id, updateItemDto, { new: true }).exec();
    }
  
    async remove(id: string): Promise<Points> {
      return this.itemModel.findByIdAndRemove(id).exec();
    }
}
