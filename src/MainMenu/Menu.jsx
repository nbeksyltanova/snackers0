import React from "react";
import MenuHard from "../asseta/img/menu_hard.png";
import Bots from "../asseta/img/sneaker.jpg";
import Pls from "../asseta/img/pls.svg";
const Menu = () => {
  return (
    <div>
      <section className="menu">
        <div className="menu__container">
          <div className="menu__hard">
            <img src={MenuHard} alt={MenuHard} />
          </div>
          <div className="menu__sneaker">
            <img src={Bots} />
          </div>
          <div className="menu__title">
            <h2>Мужские Кроссовки Nike Blazer Mid Suede</h2>
          </div>
          <div className="menu__pls-container">
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

export default Menu;
