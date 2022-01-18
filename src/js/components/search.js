import NewsApi from "../api/newsApi.js";

export default class Search extends NewsApi {
  constructor({ input, button }) {
    super();
    this.input = input;
    this.button = button;
  }

  makeRequest() {
    if (this.input.value.length !== 0) {
      return this.getNews(this.input.value)
        .then((res) => {
          if (res.status === "ok") { return res.articles; }
          return Promise.reject();
        })
        .catch((err) => {
          throw new Error(`Ошибка запроса: ${err}`);
        });
    }
    throw Error("Введите значение");
  }

  listener(callback) {
    this.button.addEventListener("click", callback);
  }
}
