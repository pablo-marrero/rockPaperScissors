import React from "react";
import "./SectionRockPaperScissors.css";
import { OptionsButton } from "./components/OptionsButton";

import { imgArray } from "./components/objImage.js";
import { usePlayContext } from "../../../context/context";

export const SectionRockPaperScissors = () => {
  const { playDificult } = usePlayContext();

  return (
    <section className="section-r-p-s">
      <div>
        <div className={`${playDificult.backgroudDificult} container-buttons`}>
          {imgArray &&
            imgArray
              .slice(0, playDificult.dificult)
              .map((e) => (
                <OptionsButton key={e.value} value={e.value} url={e.url} />
              ))}
        </div>
      </div>
    </section>
  );
};
