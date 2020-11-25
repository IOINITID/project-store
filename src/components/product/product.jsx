import React from 'react';
import './product.scss';
import HeartIcon from '../../assets/images/heart-icon.svg';
import HeartFilledIcon from '../../assets/images/heart-filled-icon.svg';

const Product = () => {
  return (
    <div className="product">
      <img
        className="product__image"
        src="https://via.placeholder.com/170"
        width="170" height="170"
        alt="Продукт."
      />
      <h3 className="product__title">Сыр Моцарелла 40% 2 кг, AltiMilk</h3>
      <p className="product__weight">1 кг</p>
      <p className="product__price">1 200 ₽</p>
      <p className="product__quantity">Много <span>***</span></p>
      <div className="product__actions">
        <button className="product__button">В корзину</button>
        {/* <HeartFilledIcon
          className="product__icon"
          width="24"
          height="24"
          aira-label="Иконка в избранное."
        /> */}
        <HeartIcon
          className="product__icon"
          width="24"
          height="24"
          aira-label="Иконка в избранное."
        />
      </div>
      <div className="product__discount">-25%</div>
    </div>
  );
};

export default Product;
