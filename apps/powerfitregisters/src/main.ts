import { NestFactory } from '@nestjs/core';
import { PowerfitregistersModule } from './powerfitregisters.module';

async function bootstrap() {
  const app = await NestFactory.create(PowerfitregistersModule);
  app.enableCors(
    { 
      origin: true,
      methods: ['POST', 'PUT', 'DELETE', 'GET']
    }
  );
  await app.listen(3004,'0.0.0.0');
}
bootstrap();
