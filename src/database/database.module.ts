import { Module } from '@nestjs/common';
import { Client } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { ConfigService } from '@nestjs/config';
import * as schema from './database.schema';

export const DatabaseProvider = 'DatabaseProvider';

@Module({
  providers: [
    {
      provide: DatabaseProvider,
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        const queryClient = new Client(config.get<string>('DATABASE_URL'));
        await queryClient.connect();
        const db = drizzle(queryClient, { schema });
        await migrate(db, {
          migrationsFolder: `${__dirname.replace(/\\/g, '/')}/migration`,
        });
        return db;
      },
    },
  ],
  exports: [DatabaseProvider],
})
export class DatabaseModule {}
