import React, { FC } from "react";

interface MainTitleWrapperProps {
  children?: React.ReactNode;
}

const MainTitleWrapper: FC<MainTitleWrapperProps> = ({children}) => {
  return (
    <div className="main-title-wrapper">
      {children}
    </div>
  )
}

export default MainTitleWrapper;