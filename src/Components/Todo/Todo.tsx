import React, { FC } from "react";
import { ITodo } from "../../types/Todo";
import ButtonAddToFavorites from "../UI/Buttons/ButtonAddToFavorites/ButtonAddToFavorites";
import ButtonComplete from "../UI/Buttons/ButtonComplete/ButtonComplete";
import {checkDay} from '../../utils/utils'
import ListStore from "../../store/ListStore";
import { observer } from "mobx-react-lite";
import {checkTerm} from "../../utils/utils";
import ButtonDelete from "../UI/Buttons/ButtonDelete/ButtonDelete";

interface TodoProps {
  todo: ITodo;
  onClick?: (evt: React.MouseEvent<HTMLDivElement>) => void;
}

const Todo: FC<TodoProps> = ({todo, onClick}) => {
  return (
    <div onClick={onClick} className={`todo ${todo.term || todo.repeat?.name || todo.reminder ? '' : 'todo--void'}`}>
      <div className="todo__main">
        <ButtonComplete complete={todo.complete} onClick={() => ListStore.toggleComplete(todo)} />
        <p className={`todo__title ${todo.complete && 'todo__title--completed'}`}>{todo.title}</p>
        <ButtonAddToFavorites favorites={todo.favorites} onClick={() => ListStore.toggleFavorites(todo)}/>
      </div>
      <div className="todo__timers-button-delete-wrapper">
        <div className="todo__timers">
          {todo.term
          &&
          <div className={`todo__timer todo__timer--term ${checkTerm(todo.term) && 'todo__timer--overdue'}`}>
            {checkTerm(todo.term) && <span>Просрочено:</span>}
            <span>{checkDay(todo.term)}</span>
          </div>}
          {todo.reminder 
          &&
          <div className="todo__timer todo__timer--reminder">
            {checkDay(todo.reminder)}
          </div>}
          {todo.repeat?.name
          &&
          <div className="todo__timer todo__timer--repeat">
            {todo.repeat?.name}
          </div>}
        </div>
        <ButtonDelete onClick={() => ListStore.deleteTodo(todo)} />
      </div>
    </div>
  )
}

export default observer(Todo);