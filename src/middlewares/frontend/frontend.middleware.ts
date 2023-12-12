import { Injectable, NestMiddleware } from '@nestjs/common';
import path from 'path';
import { Response } from 'express';

@Injectable()
export class FrontendMiddleware implements NestMiddleware {
  use(res: Response, next: (error?: any) => void) {
    res.sendFile(path.resolve('../frontend/dist/my-app/index.html'));
    next();
  }
}
