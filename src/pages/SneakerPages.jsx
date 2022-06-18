import React from "react";
import Sneakers from "../conponents/Sneakers";
import Sort from "../conponents/Sort";
import Our from "../conponents/Our";
const SneakerPages = ({ data }) => {
  return (
    <div>
      <Sort items={["Популярности", "Цене", "Бренду"]} />
      <Our />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.map((item) => (
          <Sneakers item={item} />
        ))}
      </div>
      {/* <Sneakers item={data} /> */}
    </div>
  );
};

export default SneakerPages;
