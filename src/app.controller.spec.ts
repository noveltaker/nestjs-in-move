import { Test, TestingModule } from '@nestjs/testing';
import { HelloController } from './domain/hello/hello.controller';
import { HelloService } from './domain/hello/hello.service';

describe('AppController', () => {
  let appResource: HelloController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HelloController],
      providers: [HelloService],
    }).compile();

    appResource = app.get<HelloController>(HelloController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appResource.getHello()).toBe('Hello World!');
    });
  });
});
