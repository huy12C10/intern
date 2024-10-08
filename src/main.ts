import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('PORT');
  app.useGlobalPipes(new ValidationPipe({
     whitelist: true,
     forbidNonWhitelisted: true
  }))
  app.setGlobalPrefix('api',{exclude: ['']});
  await app.listen(port);
}
bootstrap();
