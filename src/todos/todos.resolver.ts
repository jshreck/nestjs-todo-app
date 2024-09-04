import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TodosService } from './todos.service';
import {
  CreateTodoInput,
  DeleteTodoInput,
  Todo,
  TodosConnection,
  UpdateTodoInput,
} from 'src/graphql';

@Resolver()
export class TodosResolver {
  constructor(private todosService: TodosService) {}

  @Query('todos')
  async getAllTodos(): Promise<TodosConnection> {
    const todos = await this.todosService.findAll();
    return {
      nodes: Object.values(todos),
    };
  }

  @Mutation()
  async createTodo(@Args('input') input: CreateTodoInput): Promise<Todo> {
    return await this.todosService.create(input.todo);
  }

  @Mutation()
  async updateTodo(@Args('input') input: UpdateTodoInput): Promise<Todo> {
    return this.todosService.updateOne({
      id: input.id.toString(),
      todo: input.todo,
    });
  }

  @Mutation()
  async deleteTodo(@Args('input') input: DeleteTodoInput): Promise<string> {
    try {
      await this.todosService.deleteOne(input.id.toString());
      return `Todo ${input.id} deleted Successfully`;
    } catch {
      return 'Deletion failed';
    }
  }
}
