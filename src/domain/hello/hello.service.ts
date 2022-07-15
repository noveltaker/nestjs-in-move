import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  async getHelloString(): Promise<string> {
    return 'Hello World!';
  }
}
