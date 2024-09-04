import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class TodosRepository {
  async create(todo: string) {
    const fileContent = await readFile('todos.json', 'utf8');
    const todos = JSON.parse(fileContent);
    const id = Math.floor(Math.random() * 999);
    const newTodo = { id, todo };

    todos[id] = newTodo;
    await writeFile('todos.json', JSON.stringify(todos));
    return newTodo;
  }

  async findAll() {
    const fileContent = await readFile('todos.json', 'utf8');
    const todos = JSON.parse(fileContent);

    return todos;
  }

  async updateOne(id: string, todo: string) {
    const fileContent = await readFile('todos.json', 'utf8');
    const todos = JSON.parse(fileContent);
    const updatedTodo = { id: parseInt(id), todo };

    todos[id] = { id: parseInt(id), todo };
    await writeFile('todos.json', JSON.stringify(todos));
    return updatedTodo;
  }

  async deleteOne(id: string) {
    const fileContent = await readFile('todos.json', 'utf8');
    const todos = JSON.parse(fileContent);

    delete todos[id];
    await writeFile('todos.json', JSON.stringify(todos));
  }
}
