import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'docker',
        database: 'dev',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true, //Utilizar true apenas para desenvolvimento, desabilitar em producao
      });

      return dataSource.initialize();
    },
  },
];
