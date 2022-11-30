import React, { FC } from "react";

interface MainTitlePageProps {
  children?: React.ReactNode; 
}

const MainTitlePage: FC<MainTitlePageProps> = ({children}) => {
  return (
    <h1 className="main-title-page">
      {children}
    </h1>
  )
}

export default MainTitlePage;