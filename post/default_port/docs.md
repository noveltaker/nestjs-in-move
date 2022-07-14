# NestJS

nest js 에서 기본 port 세팅 방법

1. config 모듈 npm 추가

```
@nestjs/config
```

2. nest js 모듈에서 추가

```ts
import {Module} from '@nestjs/common';
import {AppResource} from './web/AppResource';
import {AppService} from './service/AppService';

import {ConfigModule} from '@nestjs/config';
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
export class AppModule {
}
```

3. configuration ts 파일 추가

```ts
import {Module} from '@nestjs/common';
import {AppResource} from './web/AppResource';
import {AppService} from './service/AppService';

import {ConfigModule} from '@nestjs/config';
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
export class AppModule {
}
```