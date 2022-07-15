import { Controller, Get } from '@nestjs/common';
import { HelloService } from './hello.service';

@Controller()
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Get('hello')
  async getHello(): Promise<string> {
    return this.helloService.getHelloString();
  }
}
