import React from 'react';
import './pagination.scss';

const Pagination = () => {
  return (
    <div className="pagination">
      <a className="pagination__prev" href="#"><span>-</span> Назад</a>

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

      <a className="pagination__next" href="#">Вперед <span>-</span></a>
    </div>
  );
};

export default Pagination;
