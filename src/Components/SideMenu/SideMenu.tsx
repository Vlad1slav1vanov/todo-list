import React, { FC } from "react";
import {observer} from "mobx-react-lite";
import SideMenuStore from "../../store/SideMenuStore/SideMenuStore";

const SideMenu: FC = () => {
  return (
    <div className={`side-menu side-menu--${SideMenuStore.currentState === 'open' ? 'open' : 'close'}`} 
    onClick={(evt: React.MouseEvent<HTMLDivElement>) => evt.stopPropagation()}
    >

    </div>
  )
}

export default observer(SideMenu)