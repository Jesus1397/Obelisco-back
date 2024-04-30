import { Module } from '@nestjs/common';
import { ObeliscoModule } from './app/obelisco/obelisco.module';
import { ConfigModule } from '@nestjs/config';
import { FooterModule } from './app/obelisco/footer/footer.module';
import { VersionsModule } from './app/obelisco/versions/versions.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { ResolutionModule } from './app/obelisco/resolution/resolution.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { HeaderModule } from './app/obelisco/header/header.module';
import { NbaModule } from './app/nba/nba.module';
import { GovernmentAreasModule } from './app/nba/government-areas/government-areas.module';

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
    NbaModule,
    GovernmentAreasModule,
    HeaderModule,
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
