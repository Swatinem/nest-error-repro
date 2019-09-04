import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ThrowMiddleware, NextMiddleware } from './test.middleware';
import { APP_FILTER } from '@nestjs/core';
import { AppFilter } from './app.filter';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    // The problem seems to be the APP_FILTER below…
    // When you comment/remove it, the request will terminate correctly…
    { provide: APP_FILTER, useClass: AppFilter },
    AppService,
  ],
})
export class AppModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer.apply(ThrowMiddleware).forRoutes('/throw');
    consumer.apply(NextMiddleware).forRoutes('/next');
  }
}
