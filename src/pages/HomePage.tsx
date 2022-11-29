import React, { FC } from "react";
import {observer} from "mobx-react-lite";
import Header from "../Components/Header/Header";
import SideMenu from "../Components/SideMenu/SideMenu";
import BurgerButton from "../Components/UI/Buttons/BurgerButton/BurgerButton";
import Logo from "../Components/UI/Logo/Logo";
import Popup from "../Components/UI/Popup/Popup";
import MainWrapper from "../Components/Wrappers/MainWrapper/MainWrapper";

const HomePage: FC = () => {
  return (
    <>
      <Header>
        <BurgerButton />
        <Logo />
      </Header>
      <MainWrapper>
        <Popup>
          <SideMenu/>
        </Popup>
      </MainWrapper>
    </>
  )
}

export default observer(HomePage);