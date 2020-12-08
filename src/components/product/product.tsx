import React, {RefObject, useRef} from 'react';
import './product.scss';
import HeartIcon from '../../assets/images/heart-icon.svg';
import HeartFilledIcon from '../../assets/images/heart-filled-icon.svg';
import Quantity from '../quantity/quantity';
import {connect} from 'react-redux';
import {onFavoritesAddAction, onCartAddAction} from '../../actions';
import CheckIcon from '../../assets/images/check-icon.svg';
import PropTypes from 'prop-types';

const Product = (props) => {
  const {id, name, image, price, quantity, weight, discount, favorites, cart, onFavoritesAdd, onCartAdd} = props;

  const getKilogramsByGrams = (grams) => {
    const GRAMS_IN_KILOGRAM = 1000;

    if (grams < 1000) {
      return `${grams} г`;
    }

    return `${grams / GRAMS_IN_KILOGRAM} кг`;
  };

  const favoriteElement: RefObject<HTMLAnchorElement> = useRef<HTMLAnchorElement>();

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
        loading="lazy"
        alt={`${name}.`}
      />
      <h3 className="product__title">{name}</h3>
      <p className="product__weight">{getKilogramsByGrams(weight)}</p>
      <p className="product__price">{`${price} ₽`}</p>
      <Quantity quantity={quantity} />
      <div className="product__actions">
        <button className={`product__button ${cart && `product__button--active`}`} onClick={(evt) => {
          evt.preventDefault();
          onCartAdd(id);
        }}>
          {cart && <CheckIcon className="product__button-icon" />}
          В корзину
        </button>
        <a className={`product__icon`} ref={favoriteElement} href="#" onClick={(evt) => {
          evt.preventDefault();
          favoriteElement.current.className = !favorites ? `product__icon--active` : `product__icon`;
          onFavoritesAdd(id);
        }}>
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

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
  favorites: PropTypes.bool,
  cart: PropTypes.bool,
  onFavoritesAdd: PropTypes.func.isRequired,
  onCartAdd: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFavoritesAdd: (productId) => dispatch(onFavoritesAddAction(productId)),
    onCartAdd: (productId) => dispatch(onCartAddAction(productId))
  };
};

export default connect(null, mapDispatchToProps)(Product);
