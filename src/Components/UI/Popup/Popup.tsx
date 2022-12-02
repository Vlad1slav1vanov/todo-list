import React, { FC } from "react";
import {observer} from "mobx-react-lite";

interface PopupProps {
  children: React.ReactNode;
  menuState: string;
  onClick: () => void;
}

const Popup: FC<PopupProps> = ({children, menuState, onClick}) => {
  return (
    <div 
    className={`popup popup--${menuState}`}
    onClick={onClick}
    >
      {children}
    </div>
  )
}

export default observer(Popup);