import React, { useState } from "react";
import MenuHard from "../asseta/img/menu_hard.png";
import hard from "../asseta/img/hart.png";
import gal from "../asseta/img/galochka.svg";
import Pls from "../asseta/img/pls.svg";
const Sneakers = ({ data, item }) => {
  // pls svg
  const [isOnAd, setIsOnAd] = useState(false);
  const onClickPlus = () => {
    setIsOnAd(!isOnAd);
  };

  // harg svg
  const [ishard, setIsHard] = React.useState(false);
  const onClickHard = () => {
    setIsHard(!ishard);
  };

  return (
    <div className="App__kross">
      <section className="menu">
        <div className="menu__container">
          <div className="menu__hard">
            <img
              className="tab"
              onClick={onClickHard}
              src={ishard ? MenuHard : hard}
              alt={MenuHard}
            />
          </div>
          <div className="menu__sneaker">
            <img src={item.image} />
          </div>
          <div className="menu__title">
            <h2>{item.name}</h2>
          </div>
          <div className="menu__pls-container">
            <div>
              <h2>Цена:</h2>
              <p>{item.price}</p>
            </div>

            <img
              className="plus"
              onClick={onClickPlus}
              src={isOnAd ? gal : Pls}
              alt="Галочка и Плюс"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sneakers;
