import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = process.env.PORT || 3000;

async function main() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:4200',
  });

  await app.listen(PORT);

  console.log('💻 Servidor en el puerto: ' + PORT);
}
main();
