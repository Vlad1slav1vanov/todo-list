import React, { FC } from "react";
import {observer} from "mobx-react-lite";

interface MainWrapperProps {
  children: React.ReactNode;
}

const MainWrapper: FC<MainWrapperProps> = ({children}) => {
  return (
    <main className="main-wrapper">
      {children}
    </main>
  )
}

export default observer(MainWrapper);