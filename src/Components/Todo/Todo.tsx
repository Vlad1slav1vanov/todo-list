import React, { FC } from "react";
import ButtonAddToFavorites from "../UI/Buttons/ButtonAddToFavorites/ButtonAddToFavorites";
import ButtonComplete from "../UI/Buttons/ButtonComplete/ButtonComplete";

interface TodoProps {
  title: string;
}

const Todo: FC<TodoProps> = ({title}) => {
  return (
    <div className="todo">
        <ButtonComplete />
        <p className="todo__title">{title}</p>
        <ButtonAddToFavorites />
    </div>
  )
}

export default Todo;