// backend/src/main.ts
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config(); // <-- load env variables here

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }));
  const basePort = parseInt(process.env.PORT as string, 10) || 3000;
  // If PORT is explicitly set, bind to it strictly (no fallback)
  if (process.env.PORT) {
    await app.listen(basePort);
    const url = await app.getUrl();
    console.log(`🚀 Server listening at ${url}`);
    return;
  }

  // Otherwise, try a small range for convenience during local dev
  const maxAttempts = 10; // try basePort..basePort+9
  for (let i = 0; i < maxAttempts; i++) {
    const portToTry = basePort + i;
    try {
      await app.listen(portToTry);
      const url = await app.getUrl();
      if (i > 0) {
        console.warn(`Port ${basePort} was busy; switched to ${portToTry}`);
      }
      console.log(`🚀 Server listening at ${url}`);
      return;
    } catch (err: any) {
      if (err && err.code === 'EADDRINUSE') {
        if (i === maxAttempts - 1) {
          console.error(`All ports from ${basePort} to ${basePort + maxAttempts - 1} are in use.`);
          throw err;
        }
        continue;
      }
      throw err;
    }
  }
}
bootstrap();

