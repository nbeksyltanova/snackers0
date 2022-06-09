import "./App.scss";
import Header from "./conponents/Header";
import Stan from "./conponents/Stan";
import Our from "./conponents/Our";

// Menu
import Menu from "./MainMenu/Menu";
import Menu2 from "./MainMenu/Menu2";
import Menu3 from "./MainMenu/Menu3";
import Menu4 from "./MainMenu/Menu4";
import Menu5 from "./MainMenu/Menu5";
import Menu6 from "./MainMenu/Menu6";
import Menu7 from "./MainMenu/Menu7";
import Menu8 from "./MainMenu/Menu8";
import Menu9 from "./MainMenu/Menu9";
import Menu10 from "./MainMenu/Menu10";
import Menu11 from "./MainMenu/Menu11";
import Menu12 from "./MainMenu/Menu12";

//PURCHASE
import Purchase from "./Market/Purchase";

function App() {
  return (
    <div className="App">
      <div className="App__back">
        <Header />
        <Stan />
        <Our />
        <div className="App__menu-sne">
          {" "}
          <Menu />
          <Menu2 />
          <Menu3 />
          <Menu4 />
        </div>
        <div className="App__menu-sne">
          <Menu5 />
          <Menu6 />
          <Menu7 />
          <Menu8 />
        </div>
        <div className="App__menu-sne">
          <Menu9 />
          <Menu10 />
          <Menu11 />
          <Menu12 />
        </div>
      </div>
      <div className="App__menu-sne  App__purchase">
        {" "}
        <Purchase />
      </div>
    </div>
  );
}

export default App;
