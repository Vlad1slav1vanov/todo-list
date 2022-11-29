import {makeAutoObservable} from "mobx";

class TodoStore {
  constructor() {
    makeAutoObservable(this)
  }

  todos = []
}

export default new TodoStore();