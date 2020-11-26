import React from 'react';
import './pagination.scss';
import ArrowIcon from '../../assets/images/arrow-icon.svg';

const Pagination = () => {
  return (
    <div className="pagination">
      <a className="pagination__prev" href="#">
        <ArrowIcon className="pagination__icon pagination__icon--prev" width="9" height="14" />
        Назад
      </a>

      <ul className="pagination__list">
        <li className="pagination__item">
          <a className="pagination__link" href="#">1</a>
        </li>
        <li className="pagination__item">
          <a className="pagination__link" href="#">2</a>
        </li>
        <li className="pagination__item">
          <a className="pagination__link pagination__link--active" href="#">3</a>
        </li>
      </ul>

      <a className="pagination__next" href="#">
        Вперед
        <ArrowIcon className="pagination__icon pagination__icon--next" width="9" height="14" />
      </a>
    </div>
  );
};

export default Pagination;
