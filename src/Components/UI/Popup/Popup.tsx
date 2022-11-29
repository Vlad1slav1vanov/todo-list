import React, { FC } from "react";
import {observer} from "mobx-react-lite";
import SideMenuStore from "../../../store/SideMenuStore/SideMenuStore";

interface PopupProps {
  children: React.ReactNode;
}

const Popup: FC<PopupProps> = ({children}) => {
  return (
    <div 
    className={`popup popup--${SideMenuStore.currentState}`}
    onClick={() => SideMenuStore.closeSideMenu()}
    >
      {children}
    </div>
  )
}

export default observer(Popup);