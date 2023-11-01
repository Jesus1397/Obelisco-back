import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function main() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(process.env.PORT);

  console.log('💻 Servidor en el puerto: ' + process.env.PORT);
}
main();
