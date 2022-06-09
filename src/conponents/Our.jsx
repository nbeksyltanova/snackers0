import React from "react";
import Search from "../asseta/img/seach.svg";
const Our = () => {
  return (
    <div>
      <section className="our">
        <div className="our__container">
          <div className="our__title">
            <h2>Все кроссовки</h2>
            <p>
              <img src={Search} alt={Search} width={17.25} />
              <input type="text" placeholder="Поиск" />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Our;
