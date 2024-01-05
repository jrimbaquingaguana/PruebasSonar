import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Claimed_Rewards extends Document {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  name_reward: string;

  @Prop()
  points_reward: string;

}

export const ClaimedRewardsSchema = SchemaFactory.createForClass(Claimed_Rewards);
