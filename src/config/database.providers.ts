import { DataSource } from 'typeorm';
import * as path from 'path';

const root: string = path.resolve(__dirname, '..');

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'sqlite',
        database: `${root}/db/sample.sqlite`,
        // domain setting
        entities: [`${root}/domain/**/*.entity{.ts,.js}`],
        // table synchronize
        migrations: [`${root}/db/*.js`],
        // table synchronize
        synchronize: true,
        // logging optional
        logging: true,
      });

      return dataSource.initialize();
    },
  },
];
