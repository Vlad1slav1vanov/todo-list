import React, { FC } from "react";

interface SideMenuButtonProps {
  children?: React.ReactNode;
  type: string;
  onClick?: () => void;
  isActive: boolean;
}

const SideMenuButton: FC<SideMenuButtonProps> = ({children, type, onClick, isActive}) => {
  return (
    <div 
      tabIndex={0} 
      onClick={onClick} 
      className={`side-menu-button side-menu-button--${type} ${isActive && 'side-menu-button--active'}`}
    >
      <span className="side-menu-button__title">
        {children}
      </span>
    </div>
  )
}

export default SideMenuButton;