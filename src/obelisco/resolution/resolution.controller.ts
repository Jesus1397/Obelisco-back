import { Controller, Get, Res, StreamableFile } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';
import type { Response } from 'express';

@Controller('obelisco/resolution')
export class ResolutionController {
  @Get()
  getFile(@Res({ passthrough: true }) res: Response): StreamableFile {
    const file = createReadStream(
      join(process.cwd(), 'public/resolution/resolucion.pdf'),
    );
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="resolucion.pdf"',
    });

    return new StreamableFile(file);
  }
}
