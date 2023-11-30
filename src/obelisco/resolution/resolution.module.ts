import { Module } from '@nestjs/common';
import { ResolutionController } from './resolution.controller';

@Module({
  controllers: [ResolutionController],
  providers: [],
})
export class ResolutionModule {}
