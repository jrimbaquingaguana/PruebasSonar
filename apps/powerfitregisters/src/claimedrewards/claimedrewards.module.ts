import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { ClaimedrewardsController } from './claimedrewards.controller';
import { ClaimedrewardsService } from './claimedrewards.service';
import { Claimed_Rewards, ClaimedRewardsSchema } from '../schemas/claimed_rewards_schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Claimed_Rewards.name, schema: ClaimedRewardsSchema }])],
  controllers: [ClaimedrewardsController],
  providers: [ClaimedrewardsService]
})
export class ClaimedrewardsModule {}
