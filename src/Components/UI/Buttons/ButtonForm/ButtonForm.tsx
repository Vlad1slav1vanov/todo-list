import React, { FC } from "react";

interface ButtonFormProps {
  type: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const ButtonForm: FC<ButtonFormProps> = ({type, children, onClick}) => {
  return (
    <button 
    className={`button-form button-form--${type}`}
    onClick={onClick}
    >
      {children}
    </button>
  )
}

export default ButtonForm;