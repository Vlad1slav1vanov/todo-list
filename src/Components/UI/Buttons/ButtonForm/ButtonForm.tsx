import React, { FC } from "react";

interface ButtonFormProps {
  type: string;
  children?: React.ReactNode;
}

const ButtonForm: FC<ButtonFormProps> = ({type, children}) => {
  return (
    <button className={`button-form button-form--${type}`}>
      {children}
    </button>
  )
}

export default ButtonForm;