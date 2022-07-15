import { Module } from '@nestjs/common';

// 기본 어플리케이션 설정
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { UserModule } from './domain/user/user.module';
import { HelloModule } from './domain/hello/hello.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    UserModule,
    HelloModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
