const SCROLL_HEADER_CONSTANT = {
  element: document.querySelector("header"),
};

const SCROLL_INTRO_CONSTANT = {
  element: document.querySelector(".intro"),
  activationRangeTop: true,
  top: -20, // Расстояние от верхней точки элемента (+) - до верхней точки (-) - от верхей точки
};

export default { SCROLL_HEADER_CONSTANT, SCROLL_INTRO_CONSTANT };
