import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CreateTodoDto } from './dtos/create-todo';
import { TodosService } from './todos.service';
import { UpdateTodoDto } from './dtos/update-todo';

@Controller('todos')
export class TodosController {
  constructor(public todosService: TodosService) {}

  @Get()
  listTodos() {
    return this.todosService.findAll();
  }

  @Post()
  createTodo(@Body() body: CreateTodoDto) {
    return this.todosService.create(body.todo);
  }

  @Put('/:id')
  updateTodo(@Param('id') id: string, @Body() body: UpdateTodoDto) {
    return this.todosService.updateOne({ id, todo: body.todo });
  }

  @Delete('/:id')
  deleteTodo(@Param('id') id: string) {
    return this.todosService.deleteOne(id);
  }
}
