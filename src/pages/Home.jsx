import React from "react";
import Stan from "../conponents/Stan";
import Our from "../conponents/Our";
import Sneakers from "../conponents/Sneakers";
import { useState } from "react";
const Home = ({ data, text, setText }) => {
  return (
    <div>
      <Stan />
      <Our text={text} setText={setText} />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.map((item) => (
          <Sneakers item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
