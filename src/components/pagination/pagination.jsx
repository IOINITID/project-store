import React, { useEffect } from 'react';
import './pagination.scss';
import ArrowIcon from '../../assets/images/arrow-icon.svg';
import {connect} from 'react-redux';
import { onSwitchPageAction } from '../../actions';
import { v4 } from 'uuid';

const Pagination = (props) => {
  const {page, productsData, onSwitchPage} = props;

  const getPages = (products) => {
    const PRODUCTS_ON_PAGE = 15;
    const pagesToShow = Math.ceil(products.length / PRODUCTS_ON_PAGE);

    return pagesToShow;
  };

  const getPageItems = (pagesQuantiy) => {
    let pageItems = [];
    let pagesTotal = pagesQuantiy;

    while (pagesTotal) {
      pageItems.push(pagesTotal);
      pagesTotal--;
    }

    return pageItems.reverse();
  };

  const pagesQuantity = getPageItems(getPages(productsData));

  useEffect(() => {
    getPages(productsData);
  }, []);

  return (
    <div className="pagination">
      <a className="pagination__prev" href="#">
        <ArrowIcon className="pagination__icon pagination__icon--prev" width="9" height="14" />
        Назад
      </a>

      <ul className="pagination__list">
        {
          pagesQuantity.map((item) => {
            return (
              <li key={v4()} className="pagination__item">
                <a
                  className={`pagination__link ${page === item && `pagination__link--active`}`}
                  href="#"
                  onClick={() => onSwitchPage(item)}
                >
                  {item}
                </a>
              </li>
            );
          })
        }
      </ul>

      <a className="pagination__next" href="#">
        Вперед
        <ArrowIcon className="pagination__icon pagination__icon--next" width="9" height="14" />
      </a>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    productsData: state.productsData,
    page: state.page
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSwitchPage: (page) => dispatch(onSwitchPageAction(page))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
