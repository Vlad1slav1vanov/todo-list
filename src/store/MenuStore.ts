import {makeAutoObservable} from "mobx"

export class MenuStore {
  constructor() {
    makeAutoObservable(this)
  }

  // Типы нижнего меню 
  menuTypes = {
    TERM: 'term',
    REMINDER: 'reminder',
    REPEAT: 'repeat',
  }

  // Состояние типа открываемого меню
  currentType = '';

  // Вабор типа меню
  changeMenuType = (type: string) => {
    this.currentType = type;
  }

  // Возможные состояния меню
  menuStates = {
    CLOSE: 'close',
    CLOSING: 'closing',
    OPEN: 'open',
    OPENING: 'opening',
  }

  // Состояние меню в данный момент
  currentState = this.menuStates.CLOSE;

  // Функция закрывает меню (задержка для смены переходного класса при закрытии)
  closeSideMenu = () => {
    this.currentState = this.menuStates.CLOSING;
    setTimeout(() => {
      this.currentState = this.menuStates.CLOSE;
    }, 500)
  };

  // Функция открывает меню
  openSideMenu = () => {
    this.currentState = this.menuStates.OPEN;
  };

  // Функция тоглит меню
  toggleSideMenu = () => {
    this.currentState === 'open' 
    ? 
    this.closeSideMenu() 
    : 
    this.openSideMenu()
  }

  // Открыть меню нужного типа
  openCurrentTypeMenu = (type: string) => {
    this.changeMenuType(type);
    this.openSideMenu();
  }
}

const leftMenu = new MenuStore();
const bottomMenu = new MenuStore();

export {leftMenu, bottomMenu};