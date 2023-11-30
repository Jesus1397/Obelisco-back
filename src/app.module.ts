import { Module } from '@nestjs/common';
import { ObeliscoModule } from './obelisco/obelisco.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { FooterModule } from './obelisco/footer/footer.module';
import { VersionsModule } from './obelisco/versions/versions.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { ResolutionModule } from './obelisco/resolution/resolution.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 10,
      },
    ]),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    ObeliscoModule,
    FooterModule,
    VersionsModule,
    ResolutionModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
  exports: [],
})
export class AppModule {}
