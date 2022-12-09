import { makeAutoObservable } from "mobx";
import { ITodo } from "../types/Todo";

class ListStore {
  constructor() {
    makeAutoObservable(this)
  }

  todoList: ITodo[] = [];
}

export default new ListStore();