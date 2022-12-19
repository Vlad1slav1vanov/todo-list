import React, { FC } from "react";
import {observer} from "mobx-react-lite";
import SideMenuButton from "../UI/Buttons/SideMenuButton/SideMenuButton";
import {leftMenu} from "../../store/MenuStore";
import ListStore from "../../store/ListStore";

interface LeftMenuProps {
  children?: React.ReactNode;
  menuState: string;
}

const SideMenu: FC<LeftMenuProps> = ({children, menuState}) => {
  return (
    <div 
    className={`left-menu left-menu--${menuState === 'open' ? 'open' : 'close'}`} 
    onClick={(evt: React.MouseEvent<HTMLDivElement>) => evt.stopPropagation()}
    >
      <h2 className="left-menu__title">Фильтры</h2>
      <SideMenuButton 
      onClick={ListStore.sortAll} 
      type="all"
      isActive={leftMenu.sortState === leftMenu.SORTSTATES.ALL}
      >
        Все задачи
      </SideMenuButton>
      <SideMenuButton 
      onClick={ListStore.sortFavorites} 
      type="favorite"
      isActive={leftMenu.sortState === leftMenu.SORTSTATES.FAVORITES}
      >
        Избранное
      </SideMenuButton>
      <SideMenuButton
      onClick={ListStore.sortLate} 
      type="late"
      isActive={leftMenu.sortState === leftMenu.SORTSTATES.LATE}
      >
        Просрочено
      </SideMenuButton>
      <SideMenuButton 
      onClick={ListStore.sortCompleted} 
      type="completed"
      isActive={leftMenu.sortState === leftMenu.SORTSTATES.COMPLETED}
      >
        Выполнено
      </SideMenuButton>
      {children}
    </div>
  )
}

export default observer(SideMenu)