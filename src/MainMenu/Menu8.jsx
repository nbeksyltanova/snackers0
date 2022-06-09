import React from "react";
import MenuHardno from "../asseta/img/MenuHartno.svg";
import Bots4 from "../asseta/img/sneaker8.jpg";
import Pls from "../asseta/img/pls.svg";
const Menu8 = () => {
  return (
    <div>
      <section className="menu8">
        <div className="menu8__container">
          <div className="menu8__hard">
            <img src={MenuHardno} alt={MenuHardno} />
          </div>
          <div className="menu8__sneaker">
            <img src={Bots4} />
          </div>
          <div className="menu8__title">
            <h2>Мужские Кроссовки Nike Blazer Mid Suede</h2>
          </div>
          <div className="menu8__pls-container">
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

export default Menu8;
