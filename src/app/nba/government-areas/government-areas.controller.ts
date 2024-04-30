import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { GovernmentAreasService } from './government-areas.service';
import { Area } from './interfaces/government-areas.interfaces';

@Controller('api/nba/government-areas')
export class GovernmentAreasController {
  constructor(
    private readonly governmentAreasService: GovernmentAreasService,
  ) {}

  @Get('all')
  getGovernmentAreasAllData() {
    return this.governmentAreasService.governmentAreasAllData;
  }

  @Get('areas')
  getGovernmentArea() {
    return this.governmentAreasService.governmentAreasIndexData;
  }

  @Get('areas/:areaId')
  getGovernmentAreaById(@Param('areaId', ParseIntPipe) areaId: number): Area {
    return this.governmentAreasService.getAreaById(areaId);
  }
}
