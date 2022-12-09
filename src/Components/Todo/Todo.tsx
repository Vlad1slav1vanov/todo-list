import React, { FC } from "react";
import { ITodo } from "../../types/Todo";
import ButtonAddToFavorites from "../UI/Buttons/ButtonAddToFavorites/ButtonAddToFavorites";
import ButtonComplete from "../UI/Buttons/ButtonComplete/ButtonComplete";
import {checkDay} from '../../utils/utils'

interface TodoProps {
  todo: ITodo;
}

const Todo: FC<TodoProps> = ({todo}) => {
  return (
    <div className="todo">
      <div className="todo__main">
        <ButtonComplete />
        <p className="todo__title">{todo.title}</p>
        <ButtonAddToFavorites />
      </div>
      <div className="todo__timers">
        {todo.term
        &&
        <div className="todo__timer todo__timer--term">
          {checkDay(todo.term)}
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
    </div>
  )
}

export default Todo;