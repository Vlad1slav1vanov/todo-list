import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import { leftMenu } from "../../../store/MenuStore";

interface MainTitlePageProps {
  children?: React.ReactNode; 
}

const MainTitlePage: FC<MainTitlePageProps> = ({children}) => {
  return (
    <h1 className="main-title-page">
      {leftMenu.sortState === leftMenu.SORTSTATES.ALL && 'Все задачи'}
      {leftMenu.sortState === leftMenu.SORTSTATES.COMPLETED && 'Выполненные задачи'}
      {leftMenu.sortState === leftMenu.SORTSTATES.FAVORITES && 'Избранные задачи'}
      {leftMenu.sortState === leftMenu.SORTSTATES.LATE && 'Просроченные задачи'}
      {children}
    </h1>
  )
}

export default observer(MainTitlePage);