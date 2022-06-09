import React from "react";
import MenuHardno from "../asseta/img/MenuHartno.svg";
import Bots4 from "../asseta/img/sneaker6.jpg";
import Pls from "../asseta/img/pls.svg";
const Menu6 = () => {
  return (
    <div>
      <section className="menu6">
        <div className="menu6__container">
          <div className="menu6__hard">
            <img src={MenuHardno} alt={MenuHardno} />
          </div>
          <div className="menu6__sneaker">
            <img src={Bots4} />
          </div>
          <div className="menu6__title">
            <h2>Мужские Кроссовки Under Armour Curry 8</h2>
          </div>
          <div className="menu6__pls-container">
            <div>
              <h2>Цена:</h2>
              <p>12 999 руб.</p>
            </div>
            <img src={Pls} alt={Pls} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu6;
