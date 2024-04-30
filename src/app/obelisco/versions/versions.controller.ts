import {
  Controller,
  Get,
  Param,
  Query,
  NotFoundException,
} from '@nestjs/common';
import { ObeliscoVersion } from './interfaces/versions.interfaces';
import { VersionsService } from './versions.service';

@Controller('api/obelisco/versions')
export class VersionsController {
  constructor(private readonly versionService: VersionsService) {}

  @Get('all')
  getVersionAllData(): ObeliscoVersion[] {
    try {
      return this.versionService.versionsAllData;
    } catch (error) {
      throw new NotFoundException('No se pudo obtener todas las versiones');
    }
  }

  @Get('list')
  getVersionList(
    @Query('order') order: string,
  ): { version: string; date: string }[] {
    try {
      let versionList: { version: string; date: string }[];

      if (order && order.toLowerCase() === 'desc') {
        versionList = this.versionService.versionsAllDataDesc.map(
          (obeliscoVersion) => ({
            version: obeliscoVersion.version,
            date: obeliscoVersion.date,
          }),
        );
      } else {
        versionList = this.versionService.versionsAllData.map(
          (obeliscoVersion) => ({
            version: obeliscoVersion.version,
            date: obeliscoVersion.date,
          }),
        );
      }

      return versionList;
    } catch (error) {
      throw new NotFoundException('No se pudo obtener la lista de versiones');
    }
  }

  @Get('/:version')
  getVersionById(
    @Param('version') version: string,
  ): ObeliscoVersion | { error: string } {
    try {
      const foundVersion = this.versionService.versionsAllData.find(
        (obeliscoVersion) => obeliscoVersion.version === version,
      );

      if (foundVersion) {
        return foundVersion;
      } else {
        throw new NotFoundException('Versión no encontrada');
      }
    } catch (error) {
      throw new NotFoundException('No se pudo obtener la versión');
    }
  }
}
