import "./App.scss";
import Header from "./conponents/Header";

import Home from "./pages/Home";
import SneakerPages from "./pages/SneakerPages";
import PurchasePages from "./pages/PurchasePages";
import { Route, Routes } from "react-router-dom";
import CartPages from "./pages/CartPages";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  // Поиск
  const [text, setText] = useState("");
  useEffect(() => {
    async function fetchData() {
      const resp = await fetch("/db.json");
      const data = await resp.json();
      console.log(data);
      setData(data);
    }
    fetchData();
  }, []);
  const [user, setUser] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const resp = await fetch("/bd.json");
      const user = await resp.json();
      setUser(user);
    }
    fetchData();
  }, []);

  // Поиск

  const searchData = data.filter((item) =>
    item.name.toLowerCase().includes(text.toLowerCase())
  );
  return (
    <div className="App">
      <div className="App__back">
        <Header />
        <div className="App__menu-sne">
          <Routes>
            <Route
              path="/"
              element={<Home data={searchData} text={text} setText={setText} />}
            />
            <Route path="/Sneakers" element={<SneakerPages data={data} />} />
            <Route path="/Purchase" element={<PurchasePages user={user} />} />
            <Route path="/Corzina" element={<CartPages />} />
          </Routes>
        </div>
      </div>
      //Пример
      {/* {data.map((item) => (
        <div>
          <img scr={item.image} />
          <h2>{item.name}</h2>
          <h3>Цена:{item.price}</h3>
        </div>
      ))} */}
    </div>
  );
}

export default App;
