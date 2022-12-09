import React, { FC } from "react";
import {observer} from "mobx-react-lite";
import Todo from "../Todo/Todo";
import ListStore from "../../store/ListStore";

const TodoList = () => {
  return (
    <ul className="todo-list">
      {ListStore.todoList.map((todo) => 
      <li className="todo-list__item" key={todo.id}>
        <Todo todo={todo}/>
      </li>
      )}
    </ul>
  )
}

export default observer(TodoList);