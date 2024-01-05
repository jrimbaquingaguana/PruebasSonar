import { NestFactory } from '@nestjs/core';
import { OauthmobileModule } from './oauthmobile.module';

async function bootstrap() {
  const app = await NestFactory.create(OauthmobileModule);
  app.enableCors(
    { 
      origin: true,
      methods: ['POST', 'PUT', 'DELETE', 'GET']
    }
  );
  await app.listen(3003,'0.0.0.0');
}
bootstrap();
