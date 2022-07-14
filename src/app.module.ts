import { Module } from '@nestjs/common';
import { AppResource } from './web/AppResource';
import { AppService } from './service/AppService';

import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  controllers: [AppResource],
  providers: [AppService],
})
export class AppModule {}
