import React from 'react';
import './breadcrumbs.scss';

const Breadcrumbs = () => {
  return (
    <div className="breadcrumbs container">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link" href="#">Молоко, сыр, яйцо</a>
        </li>
        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link" href="#">Сыры молодые</a>
        </li>
        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link" href="#">Сыры козьи, овечьи</a>
        </li>
      </ul>
    </div>
  );
};

export default Breadcrumbs;
