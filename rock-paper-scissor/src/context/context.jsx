import React, { useContext, useState, createContext } from "react";

const PlayContext = createContext();

export const PlayProvider = ({ children }) => {
  const [playDificult, setPlayDificult] = useState({
    dificult: 3,
    score: 0,
    backgroudDificult: "square",
    inPlay: true,
  });
  return (
    <PlayContext.Provider value={{ playDificult, setPlayDificult }}>
      {children}
    </PlayContext.Provider>
  );
};

export const usePlayContext = () => {
  const context = useContext(PlayContext);
  if (context === undefined) {
    throw new Error(
      "usePlay must be used within a PlayProvider 135463841348638"
    );
  }
  return context;
};
