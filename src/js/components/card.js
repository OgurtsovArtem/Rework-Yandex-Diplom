export default class Card {
  _setFormatDate(newsDate) {
    const date = new Date(newsDate);

    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleString("ru", options);
  }

  _cardTemplate() {
    const _templateCard = `
      <div class="card__image-block">
        <img class="card__image" src="../icons/not-found_v1.svg" alt="card-image">
      </div>
      <div class="card__body">
        <time class="card__date"></time>
        <h3 class="card__title"></h3>
        <p class="card__text"></p>
        <a class="card__link" href="#" target="_blank" rel="noopener noreferrer"></a>
      </div>
      <div class="card__box">
        <button class="card__tag-button _button-block _button-block_rectangular" type="button">Природа</button>
        <button class="card__hint-button _button-block _button-block_rectangular" type="button"> Убрать из
          сохранённых</button>
        <button class="card__save-button _button-block" type="button">
          <img src="./icons/bookmark_normal.svg" alt="save-card-icon">
        </button>
      </div>
    `;
    return _templateCard;
  }

  _preloaderTemplate() {
    const _templatePreloader = `
      <div class="preloader-card__image _blink"></div>
      <div class="preloader-card__continaer">
        <div class="preloader-card__date _blink"></div>
        <div class="preloader-card__title _blink"></div>
        <div class="preloader-card__text _blink"></div>
        <div class="preloader-card__link _blink"></div>
      </div>
    `;
    return _templatePreloader;
  }

  createLoader() {
    const preloader = document.createElement("div");
    preloader.classList.add("preloader-card");

    preloader.insertAdjacentHTML("beforeend", this._preloaderTemplate().trim());

    return preloader;
  }

  removeLoader() {
    const preloaders = document.querySelectorAll(".preloader-card");
    preloaders.forEach((preloader) => {
      preloader.remove();
    });
  }

  createCard(data) {
    const card = document.createElement("div");
    card.classList.add("cards__card", "card", "_hover");

    card.insertAdjacentHTML("beforeend", this._cardTemplate().trim());

    const img = card.querySelector(".card__image");
    const date = card.querySelector(".card__date");
    const title = card.querySelector(".card__title");
    const text = card.querySelector(".card__text");
    const link = card.querySelector(".card__link");

    if (data.urlToImage) {
      img.src = data.urlToImage;
    }
    date.setAttribute("datetime", data.publishedAt);
    date.textContent = this._setFormatDate(data.publishedAt);
    title.textContent = data.title;
    text.textContent = data.description;
    link.href = data.url;
    link.textContent = data.source.name;
    return card;
  }

  removeCard() {

  }

  createPreloader() {
    this._preloaderTemplate();
  }
}
