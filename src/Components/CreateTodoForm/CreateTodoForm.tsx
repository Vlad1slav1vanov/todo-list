import React, { FC } from "react";
import {observer} from "mobx-react-lite";
import ButtonForm from "../UI/Buttons/ButtonForm/ButtonForm";
import ButtonAdd from "../UI/Buttons/ButtonAdd/ButtonAdd";

const CreateTodoForm: FC = () => {
  return (
    <div className="create-todo-form">
      <div className="create-todo-form__input-wrapper">
        <div tabIndex={0} className="create-todo-form__button-plus">
          <span></span>
          <span></span>
        </div>
        <label className="create-todo-form__label-title" htmlFor="title">
          <input type="text" id="title" name="title" placeholder="Добавить задачу" />
        </label>
      </div>
      <div className="create-todo-form__buttons">
        <div className="create-todo-form__buttons-wrapper">
          <ButtonForm type="bell" />
          <ButtonForm type="calendar" />
          <ButtonForm type="refresh" />
        </div>
        <ButtonAdd />
      </div>
    </div>
  )
}

export default observer(CreateTodoForm);