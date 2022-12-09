import { makeAutoObservable } from "mobx";
import { ITodo } from "../types/Todo";
import dayjs from "dayjs";



class ListStore {
  constructor() {
    makeAutoObservable(this)
  } 

  todoList: ITodo[] = [];
}

export default new ListStore();