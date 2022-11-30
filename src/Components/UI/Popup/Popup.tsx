import React, { FC } from "react";
import {observer} from "mobx-react-lite";
import SideMenuStore from "../../../store/SideMenuStore/SideMenuStore";

interface PopupProps {
  children: React.ReactNode;
  menuState: string;
}

const Popup: FC<PopupProps> = ({children, menuState}) => {
  return (
    <div 
    className={`popup popup--${menuState}`}
    onClick={() => SideMenuStore.closeSideMenu()}
    >
      {children}
    </div>
  )
}

export default observer(Popup);