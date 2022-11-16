import React, { useState, useEffect } from "react";
import { usePlayContext } from "../../../../context/context";
import { selectOptions } from "../../../utilities/rock-peper-scissors/selectOptions";
import {
  styleslectOptions,
  resetStylesOptions,
} from "../../../utilities/rock-peper-scissors/styleSelectOptions";
import "./optionsButton.css";

export const OptionsButton = ({ value, url }) => {
  const { playDificult, setPlayDificult } = usePlayContext();
  const [first, setFirst] = useState(null);

  const controllersVS = async () => {
    styleslectOptions(value);
    selectOptions(value, playDificult.dificult, setFirst);
    setPlayDificult({
      ...playDificult,
      inPlay: false,
    });
  };

  const resetValues = () => {
    resetStylesOptions();
    setFirst(null);
    setPlayDificult({
      ...playDificult,
      inPlay: true,
    });
  };

  ///////UseEfect para controlar el Scrore///////
  useEffect(() => {
    if (first) {
      if (first.ret.msg === "You Win") {
        setPlayDificult({
          ...playDificult,
          score: playDificult.score + first.ret.score,
        });
      }
      if (first.ret.msg === "You Lose") {
        setPlayDificult({
          ...playDificult,
          score: 0,
        });
      }
      if (first.ret.msg === "It's a Tie") {
        setPlayDificult({
          ...playDificult,
        });
      }
    }
  }, [first, setPlayDificult]);

  return (
    <>
      <div className={`cont-buttons-options ${value}`} data_value={value}>
        <button
          className={`optionsButton`}
          onClick={() => controllersVS(value)}
        >
          <img src={url} alt={`img-${value}`} />
        </button>
      </div>
      {first && (
        <>
          <pre className="msg-button-post-play">
            <button onClick={() => resetValues()}>PLAY AGAIN</button>
            <p>{first.ret.msg}</p>
          </pre>
        </>
      )}
      {first && (
        <>
          <div
            className={`cont-buttons-options ${first.selectSistem.value} button-system visible-right`}
            data_value={value}
          >
            <button className="optionsButton">
              <img
                src={first.selectSistem.url}
                alt={`img-${first.selectSistem.value}`}
              />
            </button>
          </div>
        </>
      )}
    </>
  );
};
