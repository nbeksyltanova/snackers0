import React from "react";
import MenuHardno from "../asseta/img/MenuHartno.svg";
import Bots2 from "../asseta/img/sneaker2.jpg";
import Calochka from "../asseta/img/galochka.svg";
const Menu2 = () => {
  return (
    <div>
      <section className="menu2">
        <div className="menu2__container">
          <div className="menu2__hard">
            <img src={MenuHardno} alt={MenuHardno} />
          </div>
          <div className="menu2__sneaker">
            <img src={Bots2} />
          </div>
          <div className="menu2__title">
            <h2>Мужские Кроссовки Nike Air Max 270</h2>
          </div>
          <div className="menu2__pls-container">
            <div>
              <h2>Цена:</h2>
              <p>12 999 руб.</p>
            </div>
            <img src={Calochka} alt={Calochka} width={32} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu2;
