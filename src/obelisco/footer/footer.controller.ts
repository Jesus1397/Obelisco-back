import {
  Controller,
  Get,
  InternalServerErrorException,
  Param,
  Res,
} from '@nestjs/common';
import { FooterService } from './footer.service';
import { join } from 'path';

@Controller('obelisco/footer')
export class FooterController {
  constructor(private readonly footerService: FooterService) {}

  @Get('all')
  getFooterAllData() {
    return this.footerService.footerAllData;
  }

  @Get('phones')
  getFooterPhonesData() {
    return this.footerService.footerPhonesData;
  }

  @Get('networks')
  getFooterNetworksData() {
    return this.footerService.footerNetworksData;
  }

  @Get('links')
  getFooterLinksData() {
    return this.footerService.footerLinksData;
  }

  @Get('images')
  getFooterImagesData() {
    return this.footerService.footerImagesData;
  }

  @Get('images/:imageId')
  serveImage(@Param('imageId') imageId: string, @Res() res) {
    try {
      return res.sendFile(
        join(
          process.cwd(),
          'public/footer/' + this.footerService.footerImagesIndexData[imageId],
        ),
      );
    } catch (error) {
      console.error('Error serving image:', error);
      throw new InternalServerErrorException('Error serving image');
    }
  }
}
