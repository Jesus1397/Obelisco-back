import { Module } from '@nestjs/common';
import { ObeliscoController } from './obelisco.controller';
import { ObeliscoService } from './obelisco.service';

@Module({
  controllers: [ObeliscoController],
  providers: [ObeliscoService],
})
export class ObeliscoModule {}
