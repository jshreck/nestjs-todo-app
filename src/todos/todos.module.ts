import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { TodosRepository } from './todos.repository';
import { TodosResolver } from './todos.resolver';
import { Todo } from './todo.entity';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['src/todos/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    // https://docs.nestjs.com/techniques/database
    // this would be in app module but the for feature would be in the specific service module
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'todos_db',
      // entities: [Todo],
      autoLoadEntities: true,
      synchronize: true, // drops db and recreates schema every time start app (don't use in prod and probably not after migrations set up)
    }),
    // this should only be in 1 module, service controls how to 'touch' the entity
    TypeOrmModule.forFeature([Todo]),
  ],
  controllers: [TodosController],
  providers: [TodosService, TodosRepository, TodosResolver],
})
export class TodosModule {}
