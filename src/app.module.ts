import { Module } from '@nestjs/common';
import { ObeliscoModule } from './app/obelisco/obelisco.module';
import { ConfigModule } from '@nestjs/config';
import { FooterModule } from './app/obelisco/footer/footer.module';
import { VersionsModule } from './app/obelisco/versions/versions.module';
import { ResolutionModule } from './app/obelisco/resolution/resolution.module';
import { HeaderModule } from './app/obelisco/header/header.module';
import { NbaModule } from './app/nba/nba.module';
import { GovernmentAreasModule } from './app/nba/government-areas/government-areas.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ObeliscoModule,
    FooterModule,
    VersionsModule,
    ResolutionModule,
    NbaModule,
    GovernmentAreasModule,
    HeaderModule,
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'public'),
    // }),
    ThrottlerModule.forRoot([
      {
        ttl: 60,
        limit: 20,
      },
    ]),
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
