import React, { FC } from "react";

interface BurgerButtonProps {
  onClick: () => void;
}

const BurgerButton: FC<BurgerButtonProps> = ({onClick}) => {

  return (
    <div className="burger-button">
      <div className="burger-button__lines-wrapper" onClick={onClick} >
        <span className="burger-button__line"></span>
        <span className="burger-button__line"></span>
        <span className="burger-button__line"></span>
      </div>
    </div>
  )
}

export default BurgerButton;