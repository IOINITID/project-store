import React, { useEffect, useState } from 'react';
import './categories.scss';
import ProjectService from '../../services/projectService.js';
import { getFilteredData } from '../../utils/common.js';

const projectService = new ProjectService();

const Categories = () => {
  const [sections, setSections] = useState([]);

  const getSections = async () => {
    const response = await projectService.getSections();

    setSections(getFilteredData(response));
  };

  useEffect(() => {
    getSections();
  }, []);

  return (
    <div className="categories">
      <h3 className="categories__title">Категории</h3>
      <ul className="categories__list">
        {
          sections &&
          sections.map((item) => {
            const {id, name, parent, items} = item;
            return (
              <li key={id} className="categories__item">
                <a className={`categories__link ${items.length && `categories__link--special categories__link--active`}`} href="#">
                  {name}
                </a>
                {
                  items.length ?
                    <ul className="categories__list-additional">
                      {
                        items.map((it) => {
                          return (
                            <li key={it.id} className="categories__item-additional">
                              <a className="categories__link-additional" href="#">{it.name}</a>
                            </li>
                          );
                        })
                      }
                    </ul> : null
                }
              </li>
            );
          })
        }
      </ul>
      {/* <ul className="categories__list">
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
      </ul> */}
    </div>
  );
};

export default Categories;
