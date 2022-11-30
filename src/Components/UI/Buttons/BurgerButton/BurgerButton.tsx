import React, { FC } from "react";
import SideMenuStore from "../../../../store/SideMenuStore/SideMenuStore";

const BurgerButton: FC = () => {

  return (
    <div className="burger-button">
      <div className="burger-button__lines-wrapper" onClick={() => SideMenuStore.toggleSideMenu()} >
        <span className="burger-button__line"></span>
        <span className="burger-button__line"></span>
        <span className="burger-button__line"></span>
      </div>
    </div>
  )
}

export default BurgerButton;