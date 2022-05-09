import { Test, TestingModule } from '@nestjs/testing';
import { AppResource } from './web/AppResource';
import { AppService } from './service/AppService';

describe('AppController', () => {
  let appResource: AppResource;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppResource],
      providers: [AppService],
    }).compile();

    appResource = app.get<AppResource>(AppResource);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appResource.getHello()).toBe('Hello World!');
    });
  });
});
