import React, { FC } from "react";
import {observer} from "mobx-react-lite";
import ButtonForm from "../UI/Buttons/ButtonForm/ButtonForm";
import ButtonAdd from "../UI/Buttons/ButtonAdd/ButtonAdd";
import { bottomMenu } from "../../store/MenuStore";
import FormStore from "../../store/FormStore";
import {checkDay} from "../../utils/utils";
import DatePicker, { registerLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";
import "react-datepicker/dist/react-datepicker.css";
registerLocale("ru", ru);

const CreateTodoForm: FC = () => {
  return (
    <div className="create-todo-form">
      <div className="create-todo-form__input-wrapper">
        <div 
        className="create-todo-form__button-plus"
        onClick={FormStore.focusTitle}
        >
          <span></span>
          <span></span>
        </div>
        <label className="create-todo-form__label-title" htmlFor="title">
          <input 
          value={FormStore.title}
          onChange={FormStore.titleOnChange}
          type="text" 
          id="title" 
          name="title" 
          placeholder="Добавить задачу" 
          />
        </label>
        <DatePicker 
        locale={ru} 
        selected={FormStore.term?.toDate()} 
        onChange={FormStore.changeTermCalendar} 
        withPortal 
        className="visually-hidden" 
        id="calendar-term" 
        />
        <DatePicker 
        locale={ru} 
        selected={FormStore.reminder?.toDate()} 
        onChange={FormStore.changeReminderCalendar} 
        withPortal 
        className="visually-hidden" 
        id="calendar-reminder" 
        />
      </div>
      <div className="create-todo-from__hidden-inputs">
      </div>
      <div className={`create-todo-form__buttons ${FormStore.title && 'create-todo-form__buttons--open'}`}>
        <div className="create-todo-form__all-buttons-wrapper">
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
          <ButtonAdd onClick={FormStore.createTodo}>Добавить</ButtonAdd>
        </div>
        <div className={`create-todo-form__timers-wrapper ${FormStore.term || FormStore.reminder || FormStore.repeat.name ? '' : 'visually-hidden'}`}>
          <div className={`create-todo-form__timer create-todo-form__timer--term ${!FormStore.term && "visually-hidden"}`}>
            <span>Срок:</span>
            <span>{FormStore.term && checkDay(FormStore.term)}</span>
          </div>
          <div className={`create-todo-form__timer create-todo-form__timer--reminder ${!FormStore.reminder && "visually-hidden"}`}>
            <span>Напомнить:</span>
            <span>{FormStore.reminder && checkDay(FormStore.reminder)}</span>
          </div>
          <div className={`create-todo-form__timer create-todo-form__timer--repeat ${!FormStore.repeat.name && 'visually-hidden'}`}>
            <span>Повтор:</span>
            <span>{FormStore.repeat.name}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default observer(CreateTodoForm);