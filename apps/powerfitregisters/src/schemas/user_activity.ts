import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Date, Document } from 'mongoose';

@Schema()
export class User_Activity extends Document {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  activity: string;

  @Prop()
  start_time: string;

  @Prop()
  end_time: string;

  @Prop()
  steeps: number;

  @Prop()
  final_goal: number;

  @Prop()
  in_process: boolean;
}

export const UserActivitySchema = SchemaFactory.createForClass(User_Activity);