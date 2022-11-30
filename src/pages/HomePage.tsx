import React, { FC } from "react";
import {observer} from "mobx-react-lite";
import Header from "../Components/Header/Header";
import SideMenu from "../Components/SideMenu/SideMenu";
import BurgerButton from "../Components/UI/Buttons/BurgerButton/BurgerButton";
import Logo from "../Components/UI/Logo/Logo";
import Popup from "../Components/UI/Popup/Popup";
import MainWrapper from "../Components/Wrappers/MainWrapper/MainWrapper";
import SideMenuButton from "../Components/UI/Buttons/SideMenuButton/SideMenuButton";
import MainTitlePage from "../Components/UI/MainTitlePage/MainTitlePage";
import ButtonSort from "../Components/UI/Buttons/ButtonSort/ButtonSort";
import MainTitleWrapper from "../Components/Wrappers/MainTitleWrapper/MainTitleWrapper";
import CreateTodoForm from "../Components/CreateTodoForm/CreateTodoForm";
import TodoList from "../Components/TodoList/TodoList";
import BottomMenu from "../Components/BottomMenu/BottomMenu";
import CreateTodoFormStore from "../store/CreateTodoFormStore/CreateTodoFormStore";
import SideMenuStore from "../store/SideMenuStore/SideMenuStore";

const HomePage: FC = () => {
  return (
    <>
      <Header>
        <BurgerButton />
        <Logo />
      </Header>
      <MainWrapper>
        <Popup menuState={SideMenuStore.currentState}>
          <SideMenu />
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