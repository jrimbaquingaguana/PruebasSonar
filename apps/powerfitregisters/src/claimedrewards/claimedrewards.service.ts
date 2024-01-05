import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Claimed_Rewards } from '../schemas/claimed_rewards_schema';

@Injectable()
export class ClaimedrewardsService {
  constructor(@InjectModel(Claimed_Rewards.name) private itemModel: Model<Claimed_Rewards>) {}

  async create(createItemDto: any): Promise<Claimed_Rewards> {
    const createdItem = new this.itemModel(createItemDto);
    return createdItem.save();
  }

  async findAll(): Promise<Claimed_Rewards[]> {
    return this.itemModel.find().exec();
  }

  async findOne(id: string): Promise<Claimed_Rewards> {
    return this.itemModel.findById(id).exec();
  }

  async findByEmail(email: string): Promise<Claimed_Rewards[]> {
    return this.itemModel.find({ email }).exec();
  }

  async update(id: string, updateItemDto: any): Promise<Claimed_Rewards> {
    return this.itemModel.findByIdAndUpdate(id, updateItemDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Claimed_Rewards> {
    return this.itemModel.findByIdAndRemove(id).exec();
  }
}
