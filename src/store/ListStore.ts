import { makeAutoObservable } from "mobx";
import { ITodo } from "../types/Todo";
import { checkTerm } from "../utils/utils";
import { leftMenu } from "./MenuStore";
class ListStore {
  constructor() {
    makeAutoObservable(this)
  } 

  todoList: ITodo[] = [];

  todoListState: ITodo[] = this.todoList;

  toggleFavorites = (todo: ITodo) => {
    const clickedTodo = this.todoList.find(item => item.id === todo.id);
    if (clickedTodo) {
      clickedTodo.favorites = !clickedTodo.favorites;
    }
  }

  toggleComplete = (todo: ITodo) => {
    const clickedTodo = this.todoList.find(item => item.id === todo.id);
    if (clickedTodo) {
      clickedTodo.complete = !clickedTodo.complete;
    }
  }

  deleteTodo = (todo: ITodo) => {
    this.todoList = this.todoList.filter(item => item.id !== todo.id);
    this.todoListState = this.todoListState.filter(item => item.id !== todo.id);
  }

  sortAll = () => {
    leftMenu.changeSort(leftMenu.SORTSTATES.ALL)
    this.todoListState = this.todoList
  }

  sortFavorites = () => {
    leftMenu.changeSort(leftMenu.SORTSTATES.FAVORITES)
    this.todoListState = this.todoList.filter(todo => todo.favorites);
  }

  sortLate = () => {
    leftMenu.changeSort(leftMenu.SORTSTATES.LATE)
    this.todoListState = this.todoList.filter(todo => todo.term ? checkTerm(todo.term) : false)
  }

  sortCompleted = () => {
    leftMenu.changeSort(leftMenu.SORTSTATES.COMPLETED)
    this.todoListState = this.todoList.filter(todo => todo.complete)
  }
}

export default new ListStore();