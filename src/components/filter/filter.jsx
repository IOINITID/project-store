import React from 'react';
import './filter.scss';

const Filter = () => {
  return (
    <div className="filter">
      <p className="filter__title">
        По возрастанию цены <span className="filter__icon"></span>
      </p>
      {/* <ul className="filter__list">
          <li className="filter__item">
            <a className="filter__link" href="#">По возрастанию цены</a>
          </li>
          <li className="filter__item">
            <a className="filter__link" href="#">По убыванию цены</a>
          </li>
        </ul> */}
    </div>
  );
};

export default Filter;
