import React, { useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

const App = () => {
  const [advice, setAdvice] = useState("");
  const [click, setClick] = useState(false);

  const fetchAPI = async () => {
    try {
      const res = await axios.get("https://api.adviceslip.com/advice");
      setAdvice(res.data.slip.advice);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, [click]);

  return (
    <div className="App">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="button" onClick={() => setClick(!click)}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
};

export default App;
