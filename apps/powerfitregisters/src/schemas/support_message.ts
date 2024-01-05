import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Support_Message extends Document {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  message: string;
}

export const SupportMessageSchema = SchemaFactory.createForClass(Support_Message);