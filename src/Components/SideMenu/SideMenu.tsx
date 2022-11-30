import React, { FC } from "react";
import {observer} from "mobx-react-lite";
import SideMenuStore from "../../store/SideMenuStore/SideMenuStore";
import SideMenuButton from "../UI/Buttons/SideMenuButton/SideMenuButton";

interface SideMenuProps {
  children?: React.ReactNode;
}

const SideMenu: FC<SideMenuProps> = ({children}) => {
  return (
    <div className={`side-menu side-menu--${SideMenuStore.currentState === 'open' ? 'open' : 'close'}`} 
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