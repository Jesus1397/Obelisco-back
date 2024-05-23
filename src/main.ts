import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NotFoundExceptionFilter } from './filters/not-found/not-found.filter';
import { ThrottlerExceptionFilter } from './filters/throttler-exception/throttler-exception.filter';

const PORT = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.enableCors({
    origin: '*',
    credentials: true,
  });

  app.useGlobalFilters(
    new NotFoundExceptionFilter(),
    new ThrottlerExceptionFilter(),
  );

  await app.listen(PORT);

  console.log(`💻 Servidor en el puerto: ${PORT}`);
}
bootstrap();
