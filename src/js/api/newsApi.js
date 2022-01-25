export default class NewsApi {
  constructor() {
    this.baseUrl = "https://newsapi.org/v2/";
    this.endpoint = "everything";
    this.sortBy = "popularity";
    this.apiKey = "cefe7cbdc6b94355ae9ee08e1066ea96";
    this.pageSize = "10";
    this.daysAgo = 7;
  }

  _setTimeAgo() {
    const date = new Date();

    date.setDate(date.getDate() - this.daysAgo);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;
  }

  getNews(keyword) {
    return fetch(`${this.baseUrl}${this.endpoint}?q=${keyword}&`
      + `from=${this._setTimeAgo()}&`
      + `sortBy=${this.sortBy}&pageSize=${this.pageSize}&`
      + `apiKey=${this.apiKey}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject();
      })
      .catch((err) => {
        throw new Error(err);
      });
  }
}
