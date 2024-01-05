import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Points extends Document {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  points: string;

}

export const PointsSchema = SchemaFactory.createForClass(Points);