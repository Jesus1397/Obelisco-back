import { Module } from '@nestjs/common';
import { GovernmentAreasModule } from './government-areas/government-areas.module';

@Module({
  imports: [GovernmentAreasModule],
})
export class NbaModule {}
