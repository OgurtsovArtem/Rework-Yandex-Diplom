/* eslint-disable no-unused-vars */
import Burger from "./components/burger.js";
import Scroll from "./components/scroll.js";
import СardList from "./components/cardList.js";
import Card from "./components/card.js";
import NewsApi from "./api/newsApi.js";
import Search from "./components/search.js";
import CardListHandler from "./components/cardListHandler.js";

import BURGER_CONSTANT from "./constants/burgerConst.js";
import CARDS_CONSTANT from "./constants/newsCardListConst.js";
import SEARCH_CONSTANT from "./constants/searchConst.js";
import scrollConst from "./constants/scrollConst.js";

const { SCROLL_HEADER_CONSTANT, SCROLL_INTRO_CONSTANT } = scrollConst;
const burger = new Burger(BURGER_CONSTANT);
const scrollHeader = new Scroll(SCROLL_HEADER_CONSTANT);
const scrollIntro = new Scroll(SCROLL_INTRO_CONSTANT);
const newsApi = new NewsApi();
const newsCardList = new СardList(CARDS_CONSTANT);
const card = new Card();
const search = new Search(SEARCH_CONSTANT);
const cardListHandler = new CardListHandler(search, newsCardList, card, newsApi);
// cards.makeRequest();

// Search Взаимодействует с NewsApi
// Cards Принимает массив и работает с ним;
// Card Хранит в себе шаблон и взаимодествие с карточкой()
