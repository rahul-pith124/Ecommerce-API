import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // Serve all routes under /api/v1
  app.setGlobalPrefix('api/v1');

  // Common global validation pipe (optional but recommended)
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  const port = configService.get<number>('PORT') || 3000;
  await app.listen(port);

  console.log(`Application is running on: http://localhost:${port}/api/v1`);
}
bootstrap().catch((err) => {
  // Log bootstrap errors and exit with failure code
  // This avoids an unhandled promise warning from linters
  // and ensures the process exits on startup failures.
  console.error('Bootstrap failed:', err);
  process.exit(1);
});
