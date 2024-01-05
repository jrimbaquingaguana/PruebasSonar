import { NestFactory } from '@nestjs/core';
import { OauthModule } from './oauth.module';

async function bootstrap() {
  const app = await NestFactory.create(OauthModule);
  app.enableCors(
    { 
      origin: true,
      methods: ['POST', 'PUT', 'DELETE', 'GET']
    }
  );
  await app.listen(3002,'0.0.0.0');
}
bootstrap();
