import { Module } from '@nestjs/common';
import { PointsController } from './points.controller';
import { PointsService } from './points.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Points, PointsSchema } from '../schemas/points_schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Points.name, schema: PointsSchema }])],

controllers: [PointsController],
  providers: [PointsService]
})
export class PointsModule {}
