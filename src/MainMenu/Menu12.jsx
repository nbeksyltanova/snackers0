import React from "react";
import MenuHardno from "../asseta/img/MenuHartno.svg";
import Bots12 from "../asseta/img/sneaker12.jpg";
import Pls from "../asseta/img/pls.svg";
const Menu12 = () => {
  return (
    <div>
      <section className="menu12">
        <div className="menu12__container">
          <div className="menu12__hard">
            <img src={MenuHardno} alt={MenuHardno} />
          </div>
          <div className="menu12__sneaker">
            <img src={Bots12} />
          </div>
          <div className="menu12__title">
            <h2>Мужские Кроссовки Under Armour Curry 8</h2>
          </div>
          <div className="menu12__pls-container">
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

export default Menu12;
