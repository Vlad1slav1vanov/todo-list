import dayjs, { Dayjs } from "dayjs";
import { makeAutoObservable } from "mobx";
import React from "react";
import { IRepeat, ITodo } from "../types/Todo";
import {bottomMenu} from "./MenuStore";
import ListStore from "./ListStore"
require('dayjs/locale/ru')
dayjs.locale('ru')

class FormStore {
  constructor() {
    makeAutoObservable(this)
  }

  // Дата сейчас
  dateNow = dayjs();

  id = null;
  title = '';
  term: dayjs.Dayjs | null = null;
  reminder: dayjs.Dayjs | null = null;
  repeat: IRepeat = {
    name: '',
    dates: [],
  }

  // изменения заголовка
  titleOnChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    this.title = evt.target.value;
  }

  changeTermToday = () => {
    this.term = this.dateNow;
    bottomMenu.closeSideMenu()
  }

  changeTermTommorow = () => {
    this.term = this.dateNow.add(1, 'day')
    bottomMenu.closeSideMenu()
  }

  changeTermNextWeek = () => {
    this.term = this.dateNow.add(7, 'days')
    bottomMenu.closeSideMenu()
  }

  deleteTerm = () => {
    this.term = null;
    bottomMenu.closeSideMenu()
  }

  focusCalendarTerm = () => {
    document.getElementById('calendar-term')?.focus()
  }

  changeTermCalendar = (date: Date) => {
    this.term = dayjs(date)
  }

  changeReminderToday = () => {
    this.reminder = this.dateNow;
    bottomMenu.closeSideMenu()
  }

  changeReminderTommorow = () => {
    this.reminder = this.dateNow.add(1, 'day')
    bottomMenu.closeSideMenu()
  }

  changeReminderNextWeek = () => {
    this.reminder = this.dateNow.add(7, 'days')
    bottomMenu.closeSideMenu()
  }

  deleteReminder = () => {
    this.reminder = null;
    bottomMenu.closeSideMenu()
  }

  focusCalendarReminder = () => {
    document.getElementById('calendar-reminder')?.focus()
  }

  changeReminderCalendar = (date: Date) => {
    this.reminder = dayjs(date)
  }

  createRepeatEveryDay = () => {
    this.repeat.name = 'Каждый день'
    this.repeat.dates = [];

    for (let i = 0; i < 14; i++) {
      const date = this.dateNow.add(i, 'day');
      this.repeat.dates.push(date);
    }

    bottomMenu.closeSideMenu()
  }

  createRepeatEveryWorkDay = () => {
    this.repeat.name = 'Рабочие дни';
    this.repeat.dates = [];

    for (let i = 0; i < 14; i++) {
      const date = this.dateNow.add(i, 'day')
      if (date.day() !== 0 && date.day() !== 6) {
        this.repeat.dates.push(date)
      }
    }

    bottomMenu.closeSideMenu()
  }

  createRepeatEveryWeek = () => {
    this.repeat.name = 'Еженедельно';
    this.repeat.dates = [];

    for (let i = 0; i < 5; i++) {
      const date = this.dateNow.add(i, 'weeks');
      this.repeat.dates.push(date)
    }

    bottomMenu.closeSideMenu()
  }

  createRepeatEveryMonth = () => {
    this.repeat.name = 'Ежемесячно';
    this.repeat.dates = [];

    for (let i = 0; i < 12; i++) {
      const date = this.dateNow.add(i, 'months');
      this.repeat.dates.push(date)
    }

    bottomMenu.closeSideMenu()
  }

  createRepeatEveryYear = () => {
    this.repeat.name = 'Ежегодно';
    this.repeat.dates = [];

    for (let i = 0; i < 10; i++) {
      if (this.term) {
        const date = this.term?.add(i, 'years');
        this.repeat.dates.push(date)
      }
    }

    bottomMenu.closeSideMenu()
  }

  deleteRepeat = () => {
    this.repeat.name = '';
    this.repeat.dates = [];
    bottomMenu.closeSideMenu()
  }

  createTodoId = () => {
    const id = ListStore.todoList.length + 1;
    return id
  }

  resetForm = () => {
    this.id = null;
    this.title = '';
    this.term = null;
    this.reminder = null;
    this.repeat = {
      name: '',
      dates: [],
    };
  }

  createTodo = () => {
    const todo: ITodo = {
      id: this.createTodoId(),
      title: this.title,
      term: this.term,
      reminder: this.reminder,
      repeat: this.repeat,
      favorites: false,
    }

    ListStore.todoList.push(todo)
    this.resetForm()
  }
}

export default new FormStore();