import { useState } from "react";
import Layout from "./Layout";
import useLocalStorage from "../useLocalStorage.js";

function CookieClicker() {
  const [count, setCount] = useLocalStorage("scoreboard", 0);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setCount(count + 1);
    setClicked(true);
    setTimeout(() => setClicked(false), 250);
  };

  const handleReset = () => {
    const confirmed = window.confirm("Are you sure you want to reset your score?");
    if (confirmed) setCount(0);
  };

  return (
    <Layout title="Cookie Clicker">
      <div className="cookie-container">
        <button className="cookie-btn" onClick={handleClick}>
          <img
            src="./cookie-1.png"
            alt="Image of a Cookie"
            className={clicked ? "clicked" : ""}
          />
        </button>

        <p className="score">Score: {count}</p>
        <button onClick={handleReset} className="Reset-btn">
          Reset
        </button>
      </div>
    </Layout>
  );
}

export default CookieClicker;
