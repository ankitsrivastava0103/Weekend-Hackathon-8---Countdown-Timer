import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  // write your code here
  const [timer, setTimer] = React.useState("");
  const handleEnter = (event) => {
    if (event.keyCode === 13) {
      clearInterval(setIntervalId);
      if (Number.isNaN(event.target.value)) {
        setTimer(0);
        return;
      }
      setTimer(parseInt(event.target.value, 10));
    }
    return;
  };
  const countdown = () => {
    clearInterval(setIntervalId);
    if (timer <= 0) {
      return;
    }
    setTimer(timer - 1);
  };

  let setIntervalId = setInterval(countdown, 1000);
  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input id="timeCount" onKeyDown={handleEnter} /> sec.
        </h1>
      </div>
      <div id="current-time">{timer}</div>
    </div>
  );
};

export default App;
