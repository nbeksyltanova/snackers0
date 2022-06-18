import React from "react";

import Header from "../conponents/Header";
import smail from "../asseta/img/sg.png";
import Iconl from "../asseta/img/Group.png";
import { NavLink } from "react-router-dom";
const Corzina = () => {
  return (
    <div>
      <div className="App__menu-sne">
        <section className="cart">
          <div className="cart__header"></div>
          <div className="cart__title">
            <img className="cart__img" src={smail} />
            <h2 className="cart__h2">У вас нет заказов</h2>
            <p className="cart__p">Вы нищеброд? Oформите хотя бы один заказ</p>
            <div className="cart__bnt">
              <img src={Iconl} />

              <NavLink to="/"> Вернуться назад</NavLink>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Corzina;
