
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateTodoInput {
    todo: string;
}

export interface UpdateTodoInput {
    todo: string;
    id: number;
}

export interface DeleteTodoInput {
    id: number;
}

export interface Todo {
    todo: string;
    id: number;
}

export interface TodosConnection {
    nodes: Nullable<Todo>[];
}

export interface IQuery {
    todos(): TodosConnection | Promise<TodosConnection>;
}

export interface IMutation {
    createTodo(input: CreateTodoInput): Todo | Promise<Todo>;
    updateTodo(input: UpdateTodoInput): Todo | Promise<Todo>;
    deleteTodo(input: DeleteTodoInput): string | Promise<string>;
}

type Nullable<T> = T | null;
