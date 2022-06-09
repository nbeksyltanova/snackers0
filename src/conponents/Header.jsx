import React from "react";
import Lodo from "../asseta/img/Logo.png";
import Cart from "../asseta/img/cart.svg";
import Hard from "../asseta/img/hart.png";
import User from "../asseta/img/user.svg";

const Header = () => {
  return (
    <div>
      <header>
        <div className="header">
          <div className="header__inner">
            <div className="header__sneak">
              <div className="header__logo">
                <img src={Lodo} />
              </div>

              <div className="header__title">
                <h2>REACT SNEAKERS</h2>
                <p>Магазин лучших кроссовок</p>
              </div>
            </div>
            {/*  */}
            <div className="header__ligh">
              <p>
                <img
                  className="header__cart"
                  src={Cart}
                  width={20}
                  height={18.27}
                />
                <span>1205 pyб.</span>
              </p>

              <p className="header__icon">
                {" "}
                <img src={Hard} width={20.87} height={18.95} />
              </p>
              <p>
                {" "}
                <img
                  className="header__icon"
                  src={User}
                  width={20}
                  height={20}
                />
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
