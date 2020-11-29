import React, { useEffect } from 'react';
import './product.scss';
import HeartIcon from '../../assets/images/heart-icon.svg';
import HeartFilledIcon from '../../assets/images/heart-filled-icon.svg';
import Quantity from '../quantity/quantity.jsx';
import {connect} from 'react-redux';
import { onFavoritesAddAction, onCartAddAction } from '../../actions';
import CheckIcon from '../../assets/images/check-icon.svg';

const Product = (props) => {
  const {id, name, image, price, quantity, weight, discount, favorites, cart, onFavoritesAdd, onCartAdd} = props;

  const getKilogramsByGrams = (grams) => {
    const GRAMS_IN_KILOGRAM = 1000;

    if (grams < 1000) {
      return `${grams} г`;
    }

    return `${grams / GRAMS_IN_KILOGRAM} кг`;
  };

  const favoriteIcon = favorites ?
    <HeartFilledIcon
      className="product__icon"
      width="24"
      height="24"
      aira-label="Иконка в избранное."
    /> :
    <HeartIcon
      className="product__icon"
      width="24"
      height="24"
      aira-label="Иконка в избранное."
    />;

  return (
    <div className="product">
      <img
        className="product__image"
        src={`images/${image}`}
        width="170" height="170"
        alt={`${name}.`}
      />
      <h3 className="product__title">{name}</h3>
      <p className="product__weight">{getKilogramsByGrams(weight)}</p>
      <p className="product__price">{`${price} ₽`}</p>
      <Quantity quantity={quantity} />
      <div className="product__actions">
        <button className={`product__button ${cart && `product__button--active`}`} onClick={() => onCartAdd(id)}>
          {cart && <CheckIcon className="product__button-icon" />}
          В корзину
        </button>
        <a href="#" onClick={() => onFavoritesAdd(id)}>
          {favoriteIcon}
        </a>
      </div>
      {
        discount ?
          <div className="product__discount">-{discount}%</div> : null
      }
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFavoritesAdd: (productId) => dispatch(onFavoritesAddAction(productId)),
    onCartAdd: (productId) => dispatch(onCartAddAction(productId))
  };
};

export default connect(null, mapDispatchToProps)(Product);
