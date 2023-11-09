import { Controller, Get, Param, Query } from '@nestjs/common';
import { ObeliscoVersion } from './interfaces/versions.interfaces';
import { VersionsService } from './versions.service';

@Controller('obelisco/versions')
export class VersionsController {
  constructor(private readonly versionService: VersionsService) {}

  @Get('all')
  getVersionAllData(): ObeliscoVersion[] {
    return this.versionService.versionsAllData;
  }

  @Get('list')
  getVersionList(
    @Query('order') order: string,
  ): { version: string; date: string }[] {
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
  }

  @Get('/:version')
  getVersionById(
    @Param('version') version: string,
  ): ObeliscoVersion | { error: string } {
    const foundVersion = this.versionService.versionsAllData.find(
      (obeliscoVersion) => obeliscoVersion.version === version,
    );

    if (foundVersion) {
      return foundVersion;
    } else {
      return { error: 'Versión no encontrada' };
    }
  }
}
