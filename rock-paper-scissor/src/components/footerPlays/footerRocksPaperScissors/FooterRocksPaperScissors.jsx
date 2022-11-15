import React, { useState } from "react";
import { usePlayContext } from "../../../context/context.jsx";
import "./FooterRocksPaperScissors.css";

export const FooterRocksPaperScissors = ({ setAddClass }) => {
  const { playDificult, setPlayDificult } = usePlayContext();
  const [easyHard, setEasyHard] = useState("hard");

  const changeDificult = () => {
    if (easyHard === "easy") {
      setEasyHard("hard");
      setPlayDificult({
        ...playDificult,
        dificult: 3,
        backgroudDificult: "square",
      });
    }
    if (easyHard === "hard") {
      setEasyHard("easy");
      setPlayDificult({
        ...playDificult,
        dificult: 5,
        backgroudDificult: "pentagon",
      });
    }
  };

  const changeClass = () => {
    setAddClass(true);
  };

  return (
    <footer className="footer-r-p-s">
      {playDificult.inPlay && (
        <button onClick={changeDificult}>{easyHard}</button>
      )}
      <button onClick={changeClass}>rules</button>
    </footer>
  );
};
