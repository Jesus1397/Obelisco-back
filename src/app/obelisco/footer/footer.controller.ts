import {
  Controller,
  Get,
  InternalServerErrorException,
  Param,
  Res,
} from '@nestjs/common';
import { FooterService } from './footer.service';
import { join } from 'path';

@Controller('api/obelisco/footer')
export class FooterController {
  constructor(private readonly footerService: FooterService) {}

  @Get('all')
  getFooterAllData() {
    try {
      return this.footerService.footerAllData;
    } catch (error) {
      throw new InternalServerErrorException(
        'Error obteniendo todos los datos del pie de página',
      );
    }
  }

  @Get('phones')
  getFooterPhonesData() {
    try {
      return this.footerService.footerPhonesData;
    } catch (error) {
      throw new InternalServerErrorException(
        'Error obteniendo datos de los teléfonos del pie de página',
      );
    }
  }

  @Get('networks')
  getFooterNetworksData() {
    try {
      return this.footerService.footerNetworksData;
    } catch (error) {
      throw new InternalServerErrorException(
        'Error obteniendo datos de las redes del pie de página',
      );
    }
  }

  @Get('links')
  getFooterLinksData() {
    try {
      return this.footerService.footerLinksData;
    } catch (error) {
      throw new InternalServerErrorException(
        'Error obteniendo datos de los enlaces del pie de página',
      );
    }
  }

  @Get('images')
  getFooterImagesData() {
    try {
      return this.footerService.footerImagesData;
    } catch (error) {
      throw new InternalServerErrorException(
        'Error obteniendo datos de las imágenes del pie de página',
      );
    }
  }

  @Get('images/:imageId')
  serveImage(@Param('imageId') imageId: string, @Res() res) {
    try {
      const imagePath = join(
        process.cwd(),
        'public/footer/',
        this.footerService.footerImagesIndexData[imageId],
      );
      return res.sendFile(imagePath);
    } catch (error) {
      throw new InternalServerErrorException('Error sirviendo la imagen');
    }
  }
}
