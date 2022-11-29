import React, { FC } from "react";

interface HeaderProps {
  children: React.ReactNode
}

const Header:FC<HeaderProps> = ({children}) => {
  return (
    <header className="header">
      {children}
    </header>
  )
}

export default Header;