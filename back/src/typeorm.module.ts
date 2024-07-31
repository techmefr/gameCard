import { DataSource } from 'typeorm';
import { Global, Module } from '@nestjs/common';
import { dataSource } from './config/database.config';

@Global() // makes the module available globally for other modules once imported in the app modules
@Module({
  imports: [],
  providers: [
    {
      // add the datasource as a provider
      provide: DataSource,
      inject: [],
      useFactory: async () => {
        // using the factory function to create the datasource instance
        try {
          await dataSource.initialize(); // initialize the data source
          return dataSource;
        }
        catch (error) {
          console.log('Error connecting to database');
          throw error;
        }
      },
    },
  ],
  exports: [DataSource],
})
export class TypeOrmModule {}