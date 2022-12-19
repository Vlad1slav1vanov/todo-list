import React, { FC } from "react";

interface ButtonaddToFavoritesProps {
  onClick?: () => void;
  favorites: boolean;
}

const ButtonAddToFavorites: FC<ButtonaddToFavoritesProps> = ({onClick, favorites}) => {
  return (
    <div onClick={onClick} className={`button-add-to-favorites ${favorites && 'button-add-to-favorites--added'}`}>
      
    </div>
  )
}

export default ButtonAddToFavorites;