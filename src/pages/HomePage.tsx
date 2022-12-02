import React, { FC } from "react";
import {observer} from "mobx-react-lite";
import Header from "../Components/Header/Header";
import LeftMenu from "../Components/LeftMenu/LeftMenu";
import BurgerButton from "../Components/UI/Buttons/BurgerButton/BurgerButton";
import Logo from "../Components/UI/Logo/Logo";
import Popup from "../Components/UI/Popup/Popup";
import MainWrapper from "../Components/Wrappers/MainWrapper/MainWrapper";
import MainTitlePage from "../Components/UI/MainTitlePage/MainTitlePage";
import ButtonSort from "../Components/UI/Buttons/ButtonSort/ButtonSort";
import MainTitleWrapper from "../Components/Wrappers/MainTitleWrapper/MainTitleWrapper";
import CreateTodoForm from "../Components/CreateTodoForm/CreateTodoForm";
import TodoList from "../Components/TodoList/TodoList";
import { leftMenu, bottomMenu } from "../store/MenuStore";
import BottomMenu from "../Components/BottomMenu/BottomMenu";

const HomePage: FC = () => {
  return (
    <>
      <Header>
        <BurgerButton onClick={leftMenu.toggleSideMenu} />
        <Logo />
      </Header>
      <MainWrapper>
        <Popup 
        menuState={leftMenu.currentState} 
        onClick={leftMenu.closeSideMenu}
        >
          <LeftMenu 
          menuState={leftMenu.currentState} 
          />
        </Popup>
        <Popup
        menuState={bottomMenu.currentState}
        onClick={bottomMenu.closeSideMenu}
        >
          <BottomMenu
          menuType={bottomMenu.currentType}
          menuState={bottomMenu.currentState}
          />
        </Popup>  
        <MainTitleWrapper>
          <MainTitlePage>Все задачи</MainTitlePage>
          <ButtonSort />
        </MainTitleWrapper>
        <CreateTodoForm />
        <TodoList />
      </MainWrapper>
    </>
  )
}

export default observer(HomePage);