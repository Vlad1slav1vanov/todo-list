import {makeAutoObservable} from "mobx";
import { ITodo } from "../../types/Todo";

class TodoListStore {
  constructor() {
    makeAutoObservable(this)
  }

  todoList: ITodo[] = [
    {
      id: 1,
      title: 'Vladislav',
      complete: false,
    }
  ];
}

export default new TodoListStore();