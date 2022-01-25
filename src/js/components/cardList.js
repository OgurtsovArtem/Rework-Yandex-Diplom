import Card from "./card.js";

export default class CardList extends Card {
  constructor({
    sectionCards, sectionError, cardContainer, buttonShowMore, renderCount,
  }) {
    super();
    this.sectionCards = sectionCards;
    this.sectionError = sectionError;
    this.cardContainer = cardContainer;
    this.buttonShowMore = buttonShowMore;

    this.renderCount = renderCount || 3;
    this.currentIndex = 0;
    this.currentLimit = 0;
    this.cardsArray = null;
    this.listener();
  }

  renderSection() {
    this.sectionCards.classList.add("_active");
    this.sectionError.classList.remove("_active");
  }

  // принимает массив экземпляров карточек и отрисовывает их;
  renderResults(array) {
    if (array) {
      this.currentIndex = 0;
      this.currentLimit = 0;
      this.cardsArray = array;
      this.cardShowLimiter();
    }
  }

  renderCard(cardObject) {
    const card = this.createCard(cardObject);
    this.cardContainer.appendChild(card);
  }

  // отвечает за отрисовку лоудера;
  renderPreloader(flag) {
    if (flag) {
      Array(this.renderCount).fill(0).forEach(() => {
        const preloaderItem = this.createLoader();
        this.cardContainer.appendChild(preloaderItem);
      });
    } else {
      this.removeLoader();
    }
  }
  // принимает объект ошибки и показывает ошибку в интерфейсе;

  renderError() {
    this.sectionError.classList.add("_active");
    this.sectionCards.classList.remove("_active");
  }

  cardShowLimiter() {
    this.currentLimit += this.renderCount;
    for (
      this.currentIndex;
      this.currentIndex < this.currentLimit && this.currentIndex < this.cardsArray.length;
      this.currentIndex++
    ) {
      this.renderCard(this.cardsArray[this.currentIndex]);
    }
  }

  listener() {
    this.buttonShowMore.addEventListener("click", this.cardShowLimiter.bind(this));
  }

  // принимает экземпляр карточки и добавляет её в список.
  addCard() {

  }
}
