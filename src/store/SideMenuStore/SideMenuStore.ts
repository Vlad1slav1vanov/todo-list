import {makeAutoObservable} from "mobx";

class SideMenuStore {
  constructor() {
    makeAutoObservable(this)
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


  toggleSideMenu = () => {
    this.currentState === 'open' 
    ? 
    this.closeSideMenu() 
    : 
    this.openSideMenu()
  }
}

export default new SideMenuStore();