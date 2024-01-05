import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(
    { 
      origin: true,
      methods: ['POST', 'PUT', 'DELETE', 'GET']
    }
  );
  
  await app.listen(3001,'0.0.0.0');
}
bootstrap();
