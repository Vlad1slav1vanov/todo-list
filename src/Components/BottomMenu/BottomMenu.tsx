import React, { FC } from "react";
import {observer} from "mobx-react-lite";

const BottomMenu: FC = () => {
  return (
    <div className="bottom-menu">
      <h3 className="bottom-menu__title">Срок</h3>
      <div className="bottom-menu__buttons-wrapper">

      </div>
      <div className="bottom-menu__button-calendar-wrapper">

      </div>
      <div className="bottom-menu__button-delete-wrapper">

      </div>
    </div>
  )
}

export default observer(BottomMenu);