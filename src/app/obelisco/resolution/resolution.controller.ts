import {
  Controller,
  Get,
  Res,
  StreamableFile,
  InternalServerErrorException,
} from '@nestjs/common';
import type { Response } from 'express';
import { ResolutionService } from './resolution.service';

@Controller('api/obelisco/resolution')
export class ResolutionController {
  constructor(private readonly resolutionService: ResolutionService) {}

  @Get()
  getFile(@Res({ passthrough: true }) res: Response): StreamableFile {
    try {
      const file = this.resolutionService.getResolutionStream();
      res.set({
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="Resolucion-Obelisco.pdf"',
      });
      return new StreamableFile(file);
    } catch (error) {
      throw new InternalServerErrorException('Error al obtener el archivo');
    }
  }

  @Get('download')
  downloadFile(@Res({ passthrough: true }) res: Response): StreamableFile {
    try {
      const file = this.resolutionService.getResolutionStream();
      res.set({
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Resolucion-Obelisco.pdf"',
      });
      return new StreamableFile(file);
    } catch (error) {
      throw new InternalServerErrorException('Error al descargar el archivo');
    }
  }
}
