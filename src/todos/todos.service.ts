import { Injectable } from '@nestjs/common';
import { TodosRepository } from './todos.repository';

@Injectable()
export class TodosService {
  constructor(public todosRepo: TodosRepository) {}

  create(todo: string) {
    return this.todosRepo.create(todo);
  }

  findAll() {
    return this.todosRepo.findAll();
  }

  updateOne(input: { id: string; todo: string }) {
    return this.todosRepo.updateOne(input.id, input.todo);
  }

  deleteOne(id: string) {
    return this.todosRepo.deleteOne(id);
  }
}
