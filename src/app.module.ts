import { Module } from '@nestjs/common';
import { AppResource } from './web/AppResource';
import { AppService } from './service/AppService';

@Module({
  imports: [],
  controllers: [AppResource],
  providers: [AppService],
})
export class AppModule {}
