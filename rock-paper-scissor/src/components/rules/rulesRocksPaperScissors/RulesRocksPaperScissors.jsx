import React, { useState, useEffect } from "react";
import imgRulesEasy from "../../../images/image-rules.svg";
import "./RulesRocksPaperScissors.css";
import imgClose from "../../../images/icon-close.svg";
import imgRulesHard from "../../../images/image-rules-bonus.svg";
import { usePlayContext } from "../../../context/context";

export const RulesRocksPaperScissors = ({ setAddClass }) => {
  const removeRules = () => {
    setAddClass("");
  };

  const { playDificult } = usePlayContext();

  const [img, setImg] = useState();

  useEffect(() => {
    if (playDificult.dificult === 3) setImg(imgRulesEasy);
    if (playDificult.dificult === 5) setImg(imgRulesHard);
  }, [playDificult.dificult]);

  return (
    <article className="rules-r-p-s">
      <div>
        <div>
          <button onClick={removeRules}>
            <img src={imgClose} alt="icon-close" />
          </button>
          <h2>RULES</h2>
          <img src={img} alt="rules-easy" />
        </div>
      </div>
    </article>
  );
};
