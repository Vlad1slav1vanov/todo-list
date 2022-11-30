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

const HomePage: FC = () => {
  return (
    <>
      <Header>
        <BurgerButton />
        <Logo />
      </Header>
      <MainWrapper>
        <Popup>
          <SideMenu />
        </Popup>
        <MainTitleWrapper>
          <MainTitlePage>Все задачи</MainTitlePage>
          <ButtonSort />
        </MainTitleWrapper>
        <CreateTodoForm />
      </MainWrapper>
    </>
  )
}

export default observer(HomePage);