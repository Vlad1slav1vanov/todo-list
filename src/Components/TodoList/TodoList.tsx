import React, { FC } from "react";
import {observer} from "mobx-react-lite";
import TodoListStore from "../../store/TodoListStore/TodoListStore";
import Todo from "../Todo/Todo";

const TodoList = () => {
  return (
    <ul className="todo-list">
      {TodoListStore.todoList.map(todo =>
        <li className="todo-list__item todo" key={todo.id}>
          <Todo 
          title={todo.title} 
          />
        </li>
      )}
    </ul>
  )
}

export default observer(TodoList);