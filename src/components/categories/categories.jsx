import React from 'react';
import './categories.scss';

const Categories = () => {
  return (
    <div className="categories">
      <h3 className="categories__title">Категории</h3>
      <ul className="categories__list">
        <li className="categories__item">
          <a className="categories__link categories__link--special" href="#">Молоко сгущенное</a>
        </li>
        <li className="categories__item">
          <a className="categories__link" href="#">Молоко, молочные напитки</a>
        </li>
        <li className="categories__item">
          <a className="categories__link" href="#">Растительные молочные продукты</a>
        </li>
        <li className="categories__item">
          <a className="categories__link" href="#">Сливочное масло</a>
        </li>
        <li className="categories__item">
          <a className="categories__link" href="#">Сметана</a>
        </li>
        <li className="categories__item">
          <a className="categories__link categories__link--special" href="#">Сыры</a>
          <ul className="categories__list-additional">
            <li className="categories__item-additional">
              <a className="categories__link-additional categories__link-additional--active" href="#">Козьи, овечьи</a>
            </li>
            <li className="categories__item-additional">
              <a className="categories__link-additional" href="#">Мягкие, рассольные, копченые</a>
            </li>
            <li className="categories__item-additional">
              <a className="categories__link-additional" href="#">Плавленные, творожные</a>
            </li>
            <li className="categories__item-additional">
              <a className="categories__link-additional" href="#">С голубой плесенью</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
