export const styleslectOptions = (value) => {
  let buttons = document.querySelectorAll(".cont-buttons-options");
  //   let filtro = Array.from(buttons.filter((el) => console.log(el)));
  console.log(value);
  buttons.forEach((element) => {
    console.log(element.attributes.data_value.textContent);
    if (element.attributes.data_value.textContent === value) {
      element.classList.add("visible");
      element.classList.add("move-left");
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
    element.classList.remove("move-left");
    element.classList.remove("display");
    element.classList.remove("move-left");
  });
};

// || element.innerHTML === valueSitem
