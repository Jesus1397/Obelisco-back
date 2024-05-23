import { Module } from '@nestjs/common';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { ResolutionModule } from './resolution/resolution.module';
import { VersionsModule } from './versions/versions.module';

@Module({
  imports: [FooterModule, HeaderModule, ResolutionModule, VersionsModule],
})
export class ObeliscoModule {}
