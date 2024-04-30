import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  NotFoundException,
} from '@nestjs/common';
import { GovernmentAreasService } from './government-areas.service';
import { Area } from './interfaces/government-areas.interfaces';

@Controller('api/nba/government-areas')
export class GovernmentAreasController {
  constructor(
    private readonly governmentAreasService: GovernmentAreasService,
  ) {}

  @Get('all')
  getGovernmentAreasAllData() {
    try {
      return this.governmentAreasService.governmentAreasAllData;
    } catch (error) {
      throw new NotFoundException(
        'No se pudo obtener la información de todas las áreas gubernamentales.',
      );
    }
  }

  @Get('areas')
  getGovernmentArea() {
    try {
      return this.governmentAreasService.governmentAreasIndexData;
    } catch (error) {
      throw new NotFoundException(
        'No se pudo obtener la información de las áreas gubernamentales.',
      );
    }
  }

  @Get('areas/:areaId')
  getGovernmentAreaById(@Param('areaId', ParseIntPipe) areaId: number): Area {
    try {
      const area = this.governmentAreasService.getAreaById(areaId);
      return area;
    } catch (error) {
      throw new NotFoundException(
        `No existe el área gubernamental con ID ${areaId}.`,
      );
    }
  }
}
