import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function main() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:4200',
  });

  await app.listen(process.env.PORT);

  console.log('💻 Servidor en el puerto: ' + process.env.PORT);
}
main();
