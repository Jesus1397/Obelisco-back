import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function main() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);
  console.log('💻 Servidor dev en http://localhost:' + process.env.PORT);
}
main();
