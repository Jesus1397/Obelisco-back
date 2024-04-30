import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.enableCors();

  await app.listen(PORT);

  console.log(`💻 Servidor en el puerto: ${PORT}`);
}
bootstrap();
