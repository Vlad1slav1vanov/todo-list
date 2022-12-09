import React, { FC } from "react";

interface ButtonAddProps {
  onClick?: () => void;
  children?: React.ReactNode;
  type?: string;
}

const ButtonAdd: FC<ButtonAddProps> = ({onClick, children, type}) => {
  return (
    <button 
    className={`button-add ${type ? `button-add--${type}` : ''}`}
    onClick={onClick}
    >
      {children}
    </button>
  )
}

export default ButtonAdd;