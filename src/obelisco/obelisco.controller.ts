import { Controller, Get, Param, Res } from '@nestjs/common';
import { ObeliscoService } from './obelisco.service';
import { join } from 'path';

@Controller('obelisco')
export class ObeliscoController {
  constructor(private readonly obeliscoService: ObeliscoService) {}

  @Get('footer/all')
  getFooterAllData() {
    return this.obeliscoService.footerAllData;
  }

  @Get('footer/phones')
  getFooterPhonesData() {
    return this.obeliscoService.footerPhonesData;
  }

  @Get('footer/networks')
  getFooterNetworksData() {
    return this.obeliscoService.footerNetworksData;
  }

  @Get('footer/links')
  getFooterLinksData() {
    return this.obeliscoService.footerLinksData;
  }

  @Get('footer/images')
  getFooterImagesData() {
    return this.obeliscoService.footerImagesData;
  }

  @Get('footer/images/:imageId')
  serveImage(@Param('imageId') imageId: string, @Res() res) {
    return res.sendFile(
      join(
        process.cwd(),
        'public/footer/' + this.obeliscoService.footerImagesData[imageId],
      ),
    );
  }
}
