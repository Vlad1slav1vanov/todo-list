import React, { FC } from "react";
import {observer} from "mobx-react-lite";
import ButtonBottomMenu from "../UI/Buttons/ButtonBottomMenu/ButtonBottomMenu";
import { bottomMenu } from "../../store/MenuStore";

interface BottomMenuProps {
  menuState: string;
  menuType?: string;
}

const BottomMenu: FC<BottomMenuProps> = ({menuState, menuType}) => {
  return (
    <div
    className={`bottom-menu bottom-menu--${menuState === 'open' ? 'open' : 'close'}`}
    >
      {menuType === bottomMenu.menuTypes.TERM && 
        <div className="bottom-menu__wrapper">
          <h2 className="bottom-menu__title">Срок</h2>
          <div className="buttons-wrapper">
            <ButtonBottomMenu type="today"/>
            <ButtonBottomMenu type="tommorow"/>
            <ButtonBottomMenu type="next-week"/>
            <ButtonBottomMenu type="select-date"/>
            <ButtonBottomMenu type="delete-date"/>
          </div>
        </div>
      }

      {menuType === bottomMenu.menuTypes.REMINDER &&
        <div className="bottom-menu__wrapper">
          <h2 className="bottom-menu__title">Напоминание</h2>
          <div className="buttons-wrapper">
            <ButtonBottomMenu type="remind-today"/>
            <ButtonBottomMenu type="remind-tommorow"/>
            <ButtonBottomMenu type="remind-next-week"/>
            <ButtonBottomMenu type="remind-select-date"/>
            <ButtonBottomMenu type="remind-delete-date"/>
          </div>
        </div>
      }

      {menuType === bottomMenu.menuTypes.REPEAT &&
        <div className="bottom-menu__wrapper">
          <h2 className="bottom-menu__title">Повтор</h2>
          <div className="buttons-wrapper">
            <ButtonBottomMenu type="repeat-every-day"/>
            <ButtonBottomMenu type="repeat-work-days"/>
            <ButtonBottomMenu type="repeat-every-week"/>
            <ButtonBottomMenu type="repeat-every-month"/>
            <ButtonBottomMenu type="repeat-every-year"/>
            <ButtonBottomMenu type="repeat-select"/>
            <ButtonBottomMenu type="repeat-delete"/>            
          </div>
        </div>
      }

    </div>
  )
}

export default observer(BottomMenu);