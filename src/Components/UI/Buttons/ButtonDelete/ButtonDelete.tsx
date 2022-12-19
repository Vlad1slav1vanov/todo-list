import React, {FC} from "react";

interface ButtonDeleteProps {
  onClick?: () => void;
}

const ButtonDelete: FC<ButtonDeleteProps> = ({onClick}) => {
  return (
    <div 
    className="button-delete"
    onClick={onClick}
    >

    </div>
  )
}

export default ButtonDelete;