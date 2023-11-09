import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { CorsMiddleware } from 'src/middlewares/cors/cors.middleware';

@Module({})
export class ObeliscoModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CorsMiddleware)
      .forRoutes({ path: 'obelisco', method: RequestMethod.GET });
  }
}
