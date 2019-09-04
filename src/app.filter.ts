import { Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class AppFilter implements ExceptionFilter {
  public catch(error: Error) {
    console.log('AppFilter received Error:');
    console.error(error);
    // NOTE: Can I just `return` the error here?
    // https://docs.nestjs.com/graphql/tooling#exception-filters suggests that I can…
    return error;
  }
}
