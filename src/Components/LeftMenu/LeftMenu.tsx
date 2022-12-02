import React, { FC } from "react";
import {observer} from "mobx-react-lite";
import SideMenuButton from "../UI/Buttons/SideMenuButton/SideMenuButton";

interface LeftMenuProps {
  children?: React.ReactNode;
  menuState: string;
}

const SideMenu: FC<LeftMenuProps> = ({children, menuState}) => {
  return (
    <div className={`left-menu left-menu--${menuState === 'open' ? 'open' : 'close'}`} 
    onClick={(evt: React.MouseEvent<HTMLDivElement>) => evt.stopPropagation()}
    >
      <SideMenuButton type="all">Все задачи</SideMenuButton>
      <SideMenuButton type="favorite">Избранное</SideMenuButton>
      <SideMenuButton type="late">Просрочено</SideMenuButton>
      <SideMenuButton type="completed">Выполнено</SideMenuButton>
      {children}
    </div>
  )
}

export default observer(SideMenu)