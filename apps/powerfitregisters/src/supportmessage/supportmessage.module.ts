import { Module } from '@nestjs/common';
import { SupportmessageController } from './supportmessage.controller';
import { SupportmessageService } from './supportmessage.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Support_Message, SupportMessageSchema } from '../schemas/support_message';

@Module({
  imports: [MongooseModule.forFeature([{ name: Support_Message.name, schema: SupportMessageSchema }])],
controllers: [SupportmessageController],
  providers: [SupportmessageService]
})
export class SupportmessageModule {}
