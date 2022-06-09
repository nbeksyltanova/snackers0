import React from "react";
import Adidas from "../asseta/img/adidas.png";
import Fov from "../asseta/img/forever.png";
import Slider from "../asseta/img/sliderpng.png";
const Stan = () => {
  return (
    <div>
      <section className="stan">
        <div className="stan__container">
          <div className="stan__left">
            <img src={Adidas} />

            <h1>
              Stan Smith<span>,</span>
              <p>Forever!</p>
            </h1>

            <button>Купить</button>
          </div>
          <div className="stan__rait">
            <img className="stan__img" src={Fov} height={300} />
            <img className="stan__slider" src={Slider} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stan;
