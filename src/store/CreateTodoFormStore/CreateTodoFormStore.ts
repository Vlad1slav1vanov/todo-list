import {makeAutoObservable} from "mobx"

class CreateTodoFormStore {
  constructor() {
    makeAutoObservable(this)
  }

}

export default new CreateTodoFormStore();