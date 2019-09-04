import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class ThrowMiddleware implements NestMiddleware {
  use() {
    console.error('throwing inside of ThrowMiddleware');
    throw new Error('throwing inside of ThrowMiddleware');
  }
}

// tslint:disable-next-line: max-classes-per-file
@Injectable()
export class NextMiddleware implements NestMiddleware {
  use(req, res, next) {
    console.error('calling next inside of NextMiddleware');
    next(new Error('calling next inside of NextMiddleware'));
  }
}
