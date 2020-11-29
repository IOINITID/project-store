import React from 'react';
import './header.scss';
import LogoIcon from '../../assets/images/logo-icon.svg';
import HeartFilledIcon from '../../assets/images/heart-filled-icon.svg';
import CartIcon from '../../assets/images/cart-icon.svg';
import MenuIcon from '../../assets/images/menu-icon.svg';
import {connect} from 'react-redux';

const Header = (props) => {
  const {productsData} = props;
  const favoritesProducts = productsData.filter((item) => item.favorites).length;

  return (
    <header className="header">
      <div className="container">
        <a className="header__logo" href="#">
          <LogoIcon className="header__logo-icon" width="184" height="40" aria-label="Логотип Project Store." />
        </a>
        <a className="header__button" href="#">
          <MenuIcon className="header__button-icon" width="16" height="16" aria-label="Иконка меню." />
          Каталог
        </a>
        <div className="header__info">
          <div className="header__favourites">
            <HeartFilledIcon className="header__favourites-icon" width="24" height="24" />
            <span className="header__favourites-count">{favoritesProducts && favoritesProducts}</span>
          </div>
          <div className="header__cart">
            <CartIcon className="header__cart-icon" width="32" height="32" />
            <span className="header__cart-count">0</span>
            <span className="header__cart-price">2 550 ₽</span>
          </div>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    productsData: state.productsData,
  };
};

export default connect(mapStateToProps, null)(Header);
