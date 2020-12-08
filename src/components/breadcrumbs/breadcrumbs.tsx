import React from 'react';
import {v4} from 'uuid';
import './breadcrumbs.scss';

const Breadcrumbs = () => {
  const breadcrumbItems = [
    `Молоко, сыр, яйцо`,
    `Сыры молодые`,
    `Сыры козьи, овечьи`
  ];

  return (
    <div className="breadcrumbs container">
      <ul className="breadcrumbs__list">
        {
          breadcrumbItems.map((item) => {
            return (
              <li key={v4()} className="breadcrumbs__item">
                <a className="breadcrumbs__link" href="#">{item}</a>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default Breadcrumbs;
