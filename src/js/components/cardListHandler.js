export default class CardListHandler {
  constructor(search, cardList, card, newsApi) {
    this.search = search;
    this.cardList = cardList;
    this.card = card;
    this.newsApi = newsApi;
    this.activateSearch();
  }

  async handler(event) {
    event.preventDefault();

    this.cardList.cardContainer.innerHTML = "";
    this.cardList.renderSection();
    this.cardList.renderPreloader(true);

    try {
      const array = await this.search.makeRequest();

      if (array.length === 0) {
        this.cardList.renderError();
      }
      this.cardList.renderResults(array);
      this.cardList.renderPreloader(false);
    } catch (err) {
      this.cardList.renderError();
      this.cardList.renderPreloader(false);
      throw new Error(err);
    }
  }

  activateSearch() {
    this.search.listener(this.handler.bind(this));
  }
}
