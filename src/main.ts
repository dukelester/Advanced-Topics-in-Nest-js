import { NestFactory, LazyModuleLoader } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3333);

  // const lazyModuleLoader = app.get(LazyModuleLoader);
 // app.enableShutdownHooks();//enableShutdownHooks() is a method of the NestApplication class
}
bootstrap();
