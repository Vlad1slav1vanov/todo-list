import React, { FC } from "react";
import {observer} from "mobx-react-lite";
import ButtonBottomMenu from "../UI/Buttons/ButtonBottomMenu/ButtonBottomMenu";
import { bottomMenu } from "../../store/MenuStore";
import FormStore from "../../store/FormStore"
interface BottomMenuProps {
  menuState: string;
  menuType?: string;
}

const BottomMenu: FC<BottomMenuProps> = ({menuState, menuType}) => {
  return (
    <div
    className={`bottom-menu bottom-menu--${menuState === 'open' ? 'open' : 'close'}`}
    onClick={(evt: React.MouseEvent<HTMLDivElement>) => evt.stopPropagation()}
    >
      {menuType === bottomMenu.menuTypes.TERM && 
        <div className="bottom-menu__wrapper">
          <h2 className="bottom-menu__title">Срок</h2>
          <div className="buttons-wrapper">
            <ButtonBottomMenu onClick={FormStore.changeTermToday} type="today"/>
            <ButtonBottomMenu onClick={FormStore.changeTermTommorow} type="tommorow"/>
            <ButtonBottomMenu onClick={FormStore.changeTermNextWeek} type="next-week"/>
            <ButtonBottomMenu onClick={FormStore.focusCalendarTerm} type="select-date"/>
            <ButtonBottomMenu onClick={FormStore.deleteTerm} type="delete-date"/>
          </div>
        </div>
      }

      {menuType === bottomMenu.menuTypes.REMINDER &&
        <div className="bottom-menu__wrapper">
          <h2 className="bottom-menu__title">Напоминание</h2>
          <div className="buttons-wrapper">
            <ButtonBottomMenu onClick={FormStore.changeReminderToday} type="remind-today"/>
            <ButtonBottomMenu onClick={FormStore.changeReminderTommorow} type="remind-tommorow"/>
            <ButtonBottomMenu onClick={FormStore.changeReminderNextWeek} type="remind-next-week"/>
            <ButtonBottomMenu onClick={FormStore.focusCalendarReminder} type="remind-select-date"/>
            <ButtonBottomMenu onClick={FormStore.deleteReminder} type="remind-delete-date"/>
          </div>
        </div>
      }

      {menuType === bottomMenu.menuTypes.REPEAT &&
        <div className="bottom-menu__wrapper">
          <h2 className="bottom-menu__title">Повтор</h2>
          <div className="buttons-wrapper">
            <ButtonBottomMenu onClick={FormStore.createRepeatEveryDay} type="repeat-every-day"/>
            <ButtonBottomMenu onClick={FormStore.createRepeatEveryWorkDay} type="repeat-work-days"/>
            <ButtonBottomMenu onClick={FormStore.createRepeatEveryWeek} type="repeat-every-week"/>
            <ButtonBottomMenu onClick={FormStore.createRepeatEveryMonth} type="repeat-every-month"/>
            <ButtonBottomMenu onClick={FormStore.createRepeatEveryYear} type="repeat-every-year"/>
            <ButtonBottomMenu type="repeat-select"/>
            <ButtonBottomMenu onClick={FormStore.deleteRepeat} type="repeat-delete"/>            
          </div>
        </div>
      }

    </div>
  )
}

export default observer(BottomMenu);