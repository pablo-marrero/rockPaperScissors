import React from "react";
import { usePlayContext } from "../../../context/context";
import imgLogo from "../../../images/logo.svg";
import "./HeaderRockPaperScissorts.css";

export const HeaderRockPaperScissorts = () => {
  const { playDificult } = usePlayContext();

  return (
    <header className="header-r-p-s">
      <picture>
        <img src={imgLogo} alt="logo-rock-paper-scissors" />
      </picture>
      <div>
        <p>SCORE</p>
        <p>{playDificult.score}</p>
      </div>
    </header>
  );
};
