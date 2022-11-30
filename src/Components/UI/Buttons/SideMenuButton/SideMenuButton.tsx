import React, { FC } from "react";

interface SideMenuButtonProps {
  children?: React.ReactNode;
  type: string;
}

const SideMenuButton: FC<SideMenuButtonProps> = ({children, type}) => {
  return (
    <div tabIndex={0} className={`side-menu-button side-menu-button--${type}`}>
      <span className="side-menu-button__title">
        {children}
      </span>
    </div>
  )
}

export default SideMenuButton;