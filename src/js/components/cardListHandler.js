export default class CardListHandler {
  constructor(search, cardList, card, newsApi) {
    this.search = search;
    this.cardList = cardList;
    this.card = card;
    this.newsApi = newsApi;
    // Const
    this.activateSearch();
  }

  _userStatus() {
    const status = {
      authUser: "authUser",
      admin: "admin",
      newUser: "newUser",
    };
    return status;
  }

  async handler(event) {
    event.preventDefault();
    this.renderCardList();
    try {
      const array = await this.search.search();
      this.cardList.renderResults(array);
      this.cardList.renderPreloader(false);
    } catch (err) {
      this.cardList.renderError();
      this.cardList.renderPreloader(false);
      console.log(err)
    }
  }

  renderCardList() {
    this.cardList.cardContainer.innerHTML = "";
    this.cardList.renderSection();
    this.cardList.renderPreloader(true);
  }

  activateSearch() {
    this.search.listener(this.handler.bind(this));
  }
}
