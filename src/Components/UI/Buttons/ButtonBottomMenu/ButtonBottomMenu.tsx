import dayjs from "dayjs";
import React, { FC } from "react";

interface ButtonBottomMenuProps {
  type?: string;
  onClick?: () => void;
} 

const ButtonBottomMenu: FC<ButtonBottomMenuProps> = ({type, onClick}) => {
  return (
    <div 
    className={`button-bottom-menu button-bottom-menu--${type}`}
    onClick={onClick}
    >
      {/* Состояния кнопок меню срока */}
      {type === "today" && 'Сегодня'}
      {type === "tommorow" && "Завтра"}
      {type === "next-week" && "Следующая неделя"}
      {type === "select-date" && "Выбрать дату"}
      {type === "delete-date" && "Удалить дату выполнения"}

      {/* состояния конпок меню напоминаний */}
      {type === "remind-today" && 'Позднее сегодня'}
      {type === "remind-tommorow" && "Завтра"}
      {type === "remind-next-week" && "Следующая неделя"}
      {type === "remind-select-date" && "Выбрать дату и время"}
      {type === "remind-delete-date" && "Удалить напоминание"}

      {/* состояния кнопок меню повторений */}
      {type === "repeat-every-day" && 'Ежедневно'}
      {type === "repeat-work-days" && "Рабоиче дни"}
      {type === "repeat-every-week" && "Еженедельно"}
      {type === "repeat-every-month" && "Ежемесячно"}
      {type === "repeat-every-year" && "Ежегодно"}
      {type === "repeat-select" && "Настроить"}
      {type === "repeat-delete" && "Не повторять"}
    </div>
  )
}

export default ButtonBottomMenu;