import React from 'react';
import './product.scss';
import HeartIcon from '../../assets/images/heart-icon.svg';
import HeartFilledIcon from '../../assets/images/heart-filled-icon.svg';

const Product = (props) => {
  const {name, image, price, quantity, weight, discount} = props;
  const isFavourite = false;

  return (
    <div className="product">
      <img
        className="product__image"
        src={`images/${image}`}
        width="170" height="170"
        alt={`${name}.`}
      />
      <h3 className="product__title">{name}</h3>
      <p className="product__weight">{`${weight} кг`}</p>
      <p className="product__price">{`${price} ₽`}</p>
      <p className="product__quantity">Много <span>***</span></p>
      <div className="product__actions">
        <button className="product__button">В корзину</button>
        {
          isFavourite ?
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
            />
        }
      </div>
      {
        discount ?
          <div className="product__discount">-{discount}%</div> : null
      }
    </div>
  );
};

export default Product;
