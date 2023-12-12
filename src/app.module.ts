import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ObeliscoModule } from './app/obelisco/obelisco.module';
import { ConfigModule } from '@nestjs/config';
import { FooterModule } from './app/obelisco/footer/footer.module';
import { VersionsModule } from './app/obelisco/versions/versions.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { ResolutionModule } from './app/obelisco/resolution/resolution.module';
import { FrontendMiddleware } from './middlewares/frontend/frontend.middleware';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 10,
      },
    ]),
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'public'),
    // }),
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
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(FrontendMiddleware).forRoutes({
      path: '/**',
      method: RequestMethod.ALL,
    });
  }
}
