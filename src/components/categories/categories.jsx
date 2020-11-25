import React from 'react';
import './categories.scss';

const Categories = () => {
  return (
    <div className="categories">
      <h3 className="categories__title">Категории</h3>
      <ul className="categories__list">
        <li className="categories__item">
          <a className="categories__link" href="#">Молоко сгущенное</a>
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
          <a className="categories__link" href="#">
            Сыры
          </a>
          <ul>
            <li>
              <a href="#">Козьи, овечьи</a>
            </li>
            <li>
              <a href="#">Мягкие, рассольные, копченые</a>
            </li>
            <li>
              <a href="#">Плавленные, творожные</a>
            </li>
            <li>
              <a href="#">С голубой плесенью</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
