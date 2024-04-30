import { Module } from '@nestjs/common';
import { GovernmentAreasController } from './government-areas.controller';
import { GovernmentAreasService } from './government-areas.service';

@Module({
  controllers: [GovernmentAreasController],
  providers: [GovernmentAreasService],
})
export class GovernmentAreasModule {}
