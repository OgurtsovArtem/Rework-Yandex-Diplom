/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import Burger from "./components/burger.js";
import Scroll from "./components/scroll.js";

import BURGER_CONSTANT from "./constants/burgerConst.js";
import scrollConst from "./constants/scrollConst.js";

const { SCROLL_HEADER_CONSTANT, SCROLL_INTRO_CONSTANT } = scrollConst;
// const header = new Header(HEADER_CONSTANT);
const burger = new Burger(BURGER_CONSTANT);
const scrollHeader = new Scroll(SCROLL_HEADER_CONSTANT);
const scrollIntro = new Scroll(SCROLL_INTRO_CONSTANT);
