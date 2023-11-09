import { Controller, Get, Param, Res } from '@nestjs/common';
import { FooterService } from './footer.service';
import { join } from 'path';

@Controller('obelisco/footer')
export class FooterController {
  constructor(private readonly obeliscoService: FooterService) {}

  @Get('all')
  getFooterAllData() {
    return this.obeliscoService.footerAllData;
  }

  @Get('phones')
  getFooterPhonesData() {
    return this.obeliscoService.footerPhonesData;
  }

  @Get('networks')
  getFooterNetworksData() {
    return this.obeliscoService.footerNetworksData;
  }

  @Get('links')
  getFooterLinksData() {
    return this.obeliscoService.footerLinksData;
  }

  @Get('images')
  getFooterImagesData() {
    return this.obeliscoService.footerImagesData;
  }

  @Get('images/:imageId')
  serveImage(@Param('imageId') imageId: string, @Res() res) {
    return res.sendFile(
      join(
        process.cwd(),
        'public/footer/' + this.obeliscoService.footerImagesIndexData[imageId],
      ),
    );
  }
}
