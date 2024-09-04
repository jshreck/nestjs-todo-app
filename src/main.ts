import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { TodosModule } from './todos/todos.module';

async function bootstrap() {
  const app = await NestFactory.create(TodosModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
