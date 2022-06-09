import React from "react";
import MenuHardno from "../asseta/img/MenuHartno.svg";
import Bots3 from "../asseta/img/sneaker3.jpg";
import Pls from "../asseta/img/pls.svg";
const Menu3 = () => {
  return (
    <div>
      <section className="menu3">
        <div className="menu3__container">
          <div className="menu3__hard">
            <img src={MenuHardno} alt={MenuHardno} />
          </div>
          <div className="menu3__sneaker">
            <img src={Bots3} />
          </div>
          <div className="menu3__title">
            <h2>Мужские Кроссовки Nike Blazer Mid Suede</h2>
          </div>
          <div className="menu3__pls-container">
            <div>
              <h2>Цена:</h2>
              <p>8 999 руб.</p>
            </div>
            <img src={Pls} alt={Pls} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu3;
