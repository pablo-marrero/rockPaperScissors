import { imgArray } from "../../sectionsPlays/sectionRockPaperScissors/components/objImage";
import { styleslectOptions } from "./styleSelectOptions";

export const selectOptions = (value, number, setFirst) => {
  return setTimeout(() => {
    let numLimit = Math.ceil(Math.random() * number);
    styleslectOptions(
      value,
      imgArray[numLimit - 1],
      imgArray[numLimit - 1].value
    );
    let valor = compareValues(value, imgArray[numLimit - 1].value);
    setFirst({ ret: valor, selectSistem: imgArray[numLimit - 1] });
    return;
    // { isTrue: true, value: imgArray[numLimit - 1] };
  }, 1500);
};

const compareValues = (value, valueSistem) => {
  if (value === valueSistem) return { msg: "It's a Tie" };

  switch (value) {
    case "rock":
      if (valueSistem === "scissors" || valueSistem === "lizard")
        return { msg: "You Win", score: +1 };
      // console.log("ganaste");
      if (valueSistem === "vulcano" || valueSistem === "paper")
        return { msg: "You Lose", score: 0 };
      // return console.log("perdiste");
      break;

    case "paper":
      if (valueSistem === "vulcano" || valueSistem === "rock")
        return { msg: "You Win", score: +1 };
      // return console.log("ganaste");
      if (valueSistem === "scissors" || valueSistem === "lizard")
        return { msg: "You Lose", score: 0 };
      break;

    case "scissors":
      if (valueSistem === "paper" || valueSistem === "lizard")
        return { msg: "You Win", score: +1 };
      // return console.log("ganaste");
      if (valueSistem === "vulcano" || valueSistem === "rock")
        return { msg: "You Lose", score: 0 };
      // return console.log("perdiste");
      break;

    case "lizard":
      if (valueSistem === "paper" || valueSistem === "vulcano")
        return { msg: "You Win", score: +1 };
      // return console.log("ganaste");
      if (valueSistem === "scissors" || valueSistem === "rock")
        return { msg: "You Lose", score: 0 };
      // return console.log("perdiste");
      break;

    case "vulcano":
      if (valueSistem === "scissors" || valueSistem === "rock")
        return { msg: "You Win", score: +1 };
      // return console.log("ganaste");
      if (valueSistem === "paper" || valueSistem === "lizard")
        return { msg: "You Lose", score: 0 };
      // return console.log("perdiste");
      break;
    default:
      return;
  }
};
