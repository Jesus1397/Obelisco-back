import { Module } from '@nestjs/common';
import { ObeliscoModule } from './obelisco/obelisco.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { FooterModule } from './obelisco/footer/footer.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    ObeliscoModule,
    FooterModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
