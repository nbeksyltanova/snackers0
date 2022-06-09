import React from "react";
import Header from "../conponents/Header";
import Sliser2 from "../asseta/img/slider2.png";
import Menu5 from "../MainMenu/Menu5";
import Menu6 from "../MainMenu/Menu6";
import Menu7 from "../MainMenu/Menu7";

const Purchase = () => {
  return (
    <div>
      <section className="purchase">
        <div className="purchase__container">
          <div>
            <Header />
          </div>

          <div className="purchase__title">
            <img src={Sliser2} alt="" />
            <h2>Мои покупки</h2>
          </div>
          <div className="purchase__menu">
            <Menu5 />
            <Menu6 />
            <Menu7 />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Purchase;
