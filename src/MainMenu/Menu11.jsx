import React from "react";
import MenuHardno from "../asseta/img/MenuHartno.svg";
import Bots4 from "../asseta/img/sneaker4.jpg";
import Pls from "../asseta/img/pls.svg";
const Menu11 = () => {
  return (
    <div>
      <section className="menu11">
        <div className="menu11__container">
          <div className="menu11__hard">
            <img src={MenuHardno} alt={MenuHardno} />
          </div>
          <div className="menu11__sneaker">
            <img src={Bots4} />
          </div>
          <div className="menu11__title">
            <h2>Мужские Кроссовки Nike Blazer Mid Suede</h2>
          </div>
          <div className="menu11__pls-container">
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

export default Menu11;
