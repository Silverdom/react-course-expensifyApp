import React, { useState } from "react";
import ReactDOM from "react-dom";

import axios from "axios";
import { typeOf } from "react-is";

// https://pokeapi.co/api/v2/generation/1/

const fetchData = () => {
  return axios
    .get("https://pokeapi.co/api/v2/generation/1/")
    .then((res) => {
      //console.log(JSON.stringify(res));
      console.log(res);
      return JSON.stringify(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

async function onClickFunc() {
    const data = await fetchData();
    console.log(data);
};

const App = () => {
  const [data, updateData] = useState("");

  return (
    <div>
      <button onClick={fetchData}>Fetch</button>
      <p>{data}</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
