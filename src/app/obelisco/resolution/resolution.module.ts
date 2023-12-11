import { Module } from '@nestjs/common';
import { ResolutionController } from './resolution.controller';
import { ResolutionService } from './resolution.service';

@Module({
  controllers: [ResolutionController],
  providers: [ResolutionService],
})
export class ResolutionModule {}
