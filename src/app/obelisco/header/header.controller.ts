import {
  Controller,
  Get,
  InternalServerErrorException,
  Param,
  Res,
} from '@nestjs/common';
import { HeaderService } from './header.service';
import { join } from 'path';

@Controller('api/obelisco/header')
export class HeaderController {
  constructor(private readonly headerService: HeaderService) {}

  @Get('images')
  getHeaderImageData() {
    return this.headerService.headerImagesData;
  }

  @Get('images/:imageId')
  serveImage(@Param('imageId') imageId: string, @Res() res) {
    try {
      return res.sendFile(
        join(
          process.cwd(),
          'public/header/' + this.headerService.headerImagesIndexData[imageId],
        ),
      );
    } catch (error) {
      console.error('Error serving image:', error);
      throw new InternalServerErrorException('Error serving image');
    }
  }
}
