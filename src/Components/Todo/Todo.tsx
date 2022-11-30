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
        <h3 className="todo__title">{title}</h3>
        <ButtonAddToFavorites />
    </div>
  )
}

export default Todo;