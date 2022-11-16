export const styleslectOptions = (value) => {
  let buttons = document.querySelectorAll(".cont-buttons-options");
  //   let filtro = Array.from(buttons.filter((el) => console.log(el)));
  buttons.forEach((element) => {
    if (element.attributes.data_value.textContent === value) {
      element.classList.add("visible");
    } else {
      element.classList.add("display");
      return;
    }
  });
};

export const resetStylesOptions = () => {
  let buttons = document.querySelectorAll(".cont-buttons-options");
  //   let filtro = Array.from(buttons.filter((el) => console.log(el)));

  buttons.forEach((element) => {
    element.classList.remove("visible");
    element.classList.remove("display");
  });
};
