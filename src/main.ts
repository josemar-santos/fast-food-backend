import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConflictExceptionHandler } from './modules/common/adapters/handler/conflict.handler';
import { NotFoundExceptionHandler } from './modules/common/adapters/handler/not-found.handler';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.setGlobalPrefix('api');
  

  app.useGlobalFilters(
    new ConflictExceptionHandler(),
    new NotFoundExceptionHandler()
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
