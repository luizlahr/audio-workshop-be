import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from '@support/services/prisma.service';
import { ValidationPipe } from '@nestjs/common';
import { ValidationErrorFactory } from '@application/errors/validation-error.factory';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      skipMissingProperties: false,
      exceptionFactory: ValidationErrorFactory,
      whitelist: true,
    }),
  );

  await app.listen(process.env.APP_PORT);

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
}
bootstrap();
