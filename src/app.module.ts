import { Module } from '@nestjs/common';
import { ObeliscoModule } from './obelisco/obelisco.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { FooterModule } from './obelisco/footer/footer.module';
import { VersionsModule } from './obelisco/versions/versions.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    ObeliscoModule,
    FooterModule,
    VersionsModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
