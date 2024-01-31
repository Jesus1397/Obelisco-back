import { Controller, Get } from '@nestjs/common';
import { HeaderService } from './header.service';

@Controller('api/obelisco/header')
export class HeaderController {
  constructor(private readonly headerService: HeaderService) {}

  @Get('image')
  getHeaderImageData() {
    return this.headerService.headerImageData;
  }
}
