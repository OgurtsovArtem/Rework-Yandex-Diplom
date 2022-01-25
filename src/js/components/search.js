import NewsApi from "../api/newsApi.js";

export default class Search extends NewsApi {
  constructor({ input, button }) {
    super();
    this.input = input;
    this.button = button;
  }

  search() {
    if (this.input.value.length !== 0) {
      return this.makeRequest();
    }
    throw Error("Введите значение");
  }

  async makeRequest() {
    try {
      const res = await this.getNews(this.input.value);
      console.log(res)
      if (res.status === "ok" && res.articles.length > 0) { return res.articles; }
      return Promise.reject();
    } catch (err) {
      throw new Error(`Ошибка запроса: ${err}`);
    }
  }

  listener(callback) {
    this.button.addEventListener("click", callback);
  }
}
