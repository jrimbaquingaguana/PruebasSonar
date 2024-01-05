import { Module } from '@nestjs/common';
import { UseractivityController } from './useractivity.controller';
import { UseractivityService } from './useractivity.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserActivitySchema, User_Activity } from '../schemas/user_activity';

@Module({
  imports :[ MongooseModule.forFeature([{ name: User_Activity.name, schema: UserActivitySchema }])],
  controllers: [UseractivityController],
  providers: [UseractivityService]
})
export class UseractivityModule {}
