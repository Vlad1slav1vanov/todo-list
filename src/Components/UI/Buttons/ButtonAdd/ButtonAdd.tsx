import React, { FC } from "react";

interface ButtonAddProps {
  onClick?: () => void;
}

const ButtonAdd: FC<ButtonAddProps> = ({onClick}) => {
  return (
    <button 
    className="button-add"
    onClick={onClick}
    >
      Добавить
    </button>
  )
}

export default ButtonAdd;