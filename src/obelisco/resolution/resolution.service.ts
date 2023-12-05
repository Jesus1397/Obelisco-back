import { Injectable } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';

@Injectable()
export class ResolutionService {
  getResolutionStream() {
    const file = createReadStream(
      join(process.cwd(), 'public/resolution/resolucion.pdf'),
    );

    return file;
  }
}
