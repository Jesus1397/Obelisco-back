import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = process.env.PORT || 3000;

async function main() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'http://localhost:4200',
      'https://front-obelisco-back.netlify.app/',
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Habilitar si tu frontend envía cookies
  });

  await app.listen(PORT);

  console.log('💻 Servidor en el puerto: ' + PORT);
}
main();
