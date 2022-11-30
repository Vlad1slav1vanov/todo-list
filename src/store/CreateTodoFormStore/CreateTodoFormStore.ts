import {makeAutoObservable} from "mobx"
import TodoListStore from "../TodoListStore/TodoListStore";
import React from "react";
import { ITodo } from "../../types/Todo";

class CreateTodoFormStore {
  constructor() {
    makeAutoObservable(this)
  }

  todoState: ITodo = {
    id: null,
    title: '',
    complete: false,
  }

  createIsAvailable = false;
  menuIsAvailable = false;

  focusTitle() {
    const titleInput = document.getElementById('title');
    titleInput?.focus()
  }

  titleOnChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    this.todoState.title = evt.target.value;
  }

  generateTodoId = () => {
    return TodoListStore.todoList.length + 1;
  }

  clearTodoState = () => {
    this.todoState.id = null;
    this.todoState.title = '';
  }

  createTodo = () => {
    const newId = this.generateTodoId()
    const newTodo: ITodo = {
      id: newId,
      title: this.todoState.title,
      complete: false,
    }

    TodoListStore.todoList.push(newTodo);
    this.clearTodoState();
  }

}

export default new CreateTodoFormStore();