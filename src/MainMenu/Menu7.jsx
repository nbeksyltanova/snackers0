import React from "react";
import MenuHardno from "../asseta/img/MenuHartno.svg";
import Bots4 from "../asseta/img/sneaker7.jpg";
import Pls from "../asseta/img/pls.svg";
const Menu7 = () => {
  return (
    <div>
      <section className="menu7">
        <div className="menu7__container">
          <div className="menu7__hard">
            <img src={MenuHardno} alt={MenuHardno} />
          </div>
          <div className="menu7__sneaker">
            <img src={Bots4} />
          </div>
          <div className="menu7__title">
            <h2>Мужские Кроссовки Under Armour Curry 8</h2>
          </div>
          <div className="menu7__pls-container">
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

export default Menu7;
