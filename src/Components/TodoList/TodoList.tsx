import React, {FC} from "react";
import {observer} from "mobx-react-lite";
import Todo from "../Todo/Todo";
import ListStore from "../../store/ListStore";
import { leftMenu } from "../../store/MenuStore";

const TodoList: FC = () => {
  return (
    <ul className="todo-list">
      {ListStore.todoListState.length === 0
      && 
      <p className="todo-list__nothing-todo">
        {leftMenu.sortState === leftMenu.SORTSTATES.ALL && 'Задачи отсутствуют'}
        {leftMenu.sortState === leftMenu.SORTSTATES.COMPLETED && 'Нет завершенных задач'}
        {leftMenu.sortState === leftMenu.SORTSTATES.FAVORITES && 'Нет задач в списке избранных'}
        {leftMenu.sortState === leftMenu.SORTSTATES.LATE && 'Просроченные задачи отсутствуют! Так держать!'}
      </p>
      }
      {ListStore.todoListState.map((todo) => 
      <li className="todo-list__item" key={todo.id}>
        <Todo todo={todo}/>
      </li>
      )}
    </ul>
  )
}

export default observer(TodoList);