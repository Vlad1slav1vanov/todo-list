import React, { FC } from "react";
import { ITodo } from "../../../../types/Todo";

interface ButtonCompleteProps {
  onClick?: () => void;
  complete: boolean;
}

const ButtonComplete: FC<ButtonCompleteProps> = ({onClick, complete}) => {
  return (
    <div className={`button-complete ${complete && 'button-complete--completed'}`} onClick={onClick}>
      
    </div>
  )
}

export default ButtonComplete;