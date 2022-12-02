import React, { FC } from "react";
import {observer} from "mobx-react-lite";
import ButtonForm from "../UI/Buttons/ButtonForm/ButtonForm";
import ButtonAdd from "../UI/Buttons/ButtonAdd/ButtonAdd";
import CreateTodoFormStore from "../../store/CreateTodoFormStore/CreateTodoFormStore";
import { bottomMenu } from "../../store/MenuStore";

const CreateTodoForm: FC = () => {
  return (
    <div className="create-todo-form">
      <div className="create-todo-form__input-wrapper">
        <div 
        className="create-todo-form__button-plus"
        onClick={CreateTodoFormStore.focusTitle}
        >
          <span></span>
          <span></span>
        </div>
        <label className="create-todo-form__label-title" htmlFor="title">
          <input 
          value={CreateTodoFormStore.todoState.title} 
          onChange={CreateTodoFormStore.titleOnChange} 
          type="text" 
          id="title" 
          name="title" 
          placeholder="Добавить задачу" 
          />
        </label>
      </div>
      <div className={`create-todo-form__buttons${CreateTodoFormStore.todoState.title ? ' create-todo-form__buttons--open' : ''}`}>
        <div className="create-todo-form__buttons-wrapper">
          <ButtonForm 
          type={bottomMenu.menuTypes.TERM} 
          onClick={() => bottomMenu.openCurrentTypeMenu(bottomMenu.menuTypes.TERM)} 
          />
          <ButtonForm 
          type={bottomMenu.menuTypes.REMINDER} 
          onClick={() => bottomMenu.openCurrentTypeMenu(bottomMenu.menuTypes.REMINDER)} 
          />
          <ButtonForm 
          type={bottomMenu.menuTypes.REPEAT} 
          onClick={() => bottomMenu.openCurrentTypeMenu(bottomMenu.menuTypes.REPEAT)} 
          />
        </div>
        <ButtonAdd onClick={CreateTodoFormStore.createTodo} />
      </div>
    </div>
  )
}

export default observer(CreateTodoForm);