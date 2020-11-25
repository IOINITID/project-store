import React from 'react';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <img
          className="header__logo"
          src="https://via.placeholder.com/184"
          width="184"
          height="40"
          alt="Логотип Project Store."
        />
        <a className="header__button" href="#">Каталог</a>

        <div className="header__info">
          <div className="header__favourites">
            <span>2</span>
          </div>
          <div className="header__cart">
            <span>2</span>
            <span>2 550 ₽</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
