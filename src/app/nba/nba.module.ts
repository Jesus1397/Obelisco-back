import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { CorsMiddleware } from 'src/middlewares/cors/cors.middleware';
import { GovernmentAreasModule } from './government-areas/government-areas.module';

@Module({
  imports: [GovernmentAreasModule]
})
export class NbaModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CorsMiddleware)
      .forRoutes({ path: 'api/nba', method: RequestMethod.GET });
  }
}
