import { Controller, Get, Res, StreamableFile } from '@nestjs/common';
import type { Response } from 'express';
import { ResolutionService } from './resolution.service';

@Controller('api/obelisco/resolution')
export class ResolutionController {
  constructor(private readonly resolutionService: ResolutionService) {}

  @Get()
  getFile(@Res({ passthrough: true }) res: Response): StreamableFile {
    const file = this.resolutionService.getResolutionStream();
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename="Resolucion-Obelisco.pdf"',
    });

    return new StreamableFile(file);
  }

  @Get('download')
  downloadFile(@Res({ passthrough: true }) res: Response): StreamableFile {
    const file = this.resolutionService.getResolutionStream();

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="Resolucion-Obelisco.pdf"',
    });

    return new StreamableFile(file);
  }
}
