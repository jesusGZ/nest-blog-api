import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidateInputPipe } from './core/pipes/validate.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // prefijo del servicio
  app.setGlobalPrefix('api/v1');
  // manejar toda la validación de entrada a nivel global
  app.useGlobalPipes(new ValidateInputPipe());
  await app.listen(3000);
}

bootstrap();
