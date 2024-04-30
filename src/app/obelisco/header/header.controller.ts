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
    try {
      return this.headerService.headerImagesData;
    } catch (error) {
      throw new InternalServerErrorException(
        'Error obteniendo datos de las imágenes del encabezado',
      );
    }
  }

  @Get('images/:imageId')
  serveImage(@Param('imageId') imageId: string, @Res() res) {
    try {
      const imagePath = join(
        process.cwd(),
        'public/header/',
        this.headerService.headerImagesIndexData[imageId],
      );
      return res.sendFile(imagePath);
    } catch (error) {
      throw new InternalServerErrorException('Error sirviendo la imagen');
    }
  }
}
