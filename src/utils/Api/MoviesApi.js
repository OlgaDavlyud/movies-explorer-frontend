class MoviesApi {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    // Метод проверки
    _checkResponse(res) {
        if(res.ok) {
            return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`)
    }

    // Запрос получения фильмов с сервера
    getInitialMovies() {
        return fetch (`${this._baseUrl}`, {
            method: 'GET',
            headers: this._headers
        })
        .then(this._checkResponse);
    }
}

const moviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
      'content-type': 'application/json'
    }
  });

export default moviesApi;