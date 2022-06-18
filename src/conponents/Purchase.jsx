import React from "react";
import Header from "../conponents/Header";
import Sliser2 from "../asseta/img/slider2.png";
import Menu5 from "../MainMenu/Menu5";
import Menu6 from "../MainMenu/Menu6";
import Menu7 from "../MainMenu/Menu7";

const Purchase = ({ user }) => {
  return (
    <div>
      <section className="purchase">
        <div className="purchase__container">
          <div className="purchase__title">
            <img src={Sliser2} alt="" />
            <h2>Мои покупки</h2>
          </div>
          <div className="purchase__menu">
            {" "}
            <div className="kross">
              {user.map((e) => (
                <div className="kross__blog">
                  <img src={e.image} />
                  <h2>{e.name}</h2>
                  <h3>
                    <p>Цена:</p>
                    {e.price} руб.
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Purchase;
