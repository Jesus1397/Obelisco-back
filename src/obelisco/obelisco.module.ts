import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ObeliscoController } from './obelisco.controller';
import { ObeliscoService } from './obelisco.service';
import { CorsMiddleware } from 'src/middlewares/cors/cors.middleware';

@Module({
  controllers: [ObeliscoController],
  providers: [ObeliscoService],
})
export class ObeliscoModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CorsMiddleware)
      .forRoutes({ path: 'obelisco', method: RequestMethod.GET });
  }
}
