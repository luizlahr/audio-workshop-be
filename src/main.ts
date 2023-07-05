import { ValidationErrorFactory } from '@application/errors/validation-error.factory';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { PrismaService } from '@support/services/prisma.service';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      skipMissingProperties: false,
      exceptionFactory: ValidationErrorFactory,
      whitelist: true,
    }),
  );

  app.enableCors({
    credentials: true,
    origin: 'http://localhost:3000',
  });

  await app.listen(process.env.APP_PORT);

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
}
bootstrap();
