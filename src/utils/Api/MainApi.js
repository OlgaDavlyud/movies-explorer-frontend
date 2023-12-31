class MainApi {
    constructor(options) {
        this._baseUrl = options.baseUrl;
    }

    // Метод проверки
    _checkResponse(res) {
        if(res.ok) {
            return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`)
    }

    // Запрос получения данных пользователя с сервера
    getInitialUserData(token) {
        return fetch (`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                "Authorization" : `Bearer ${token}`
            }
        })
        .then(this._checkResponse);
    }

    // Запрос изменения данных пользователя
    changeUserData(data) {
        console.log(data)
        return fetch (`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
              name: data.name,
              email: data.email,
            })
        })
        .then(this._checkResponse);
    }

    // Запрос получения сохраненных фильмов с сервера
    getInitialSavedMovies() {
        return fetch (`${this._baseUrl}/movies`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(this._checkResponse)
    }

    // Запрос добавления фильма в избранные
    addSavedMovie(dataMovie) {
        return fetch (`${this._baseUrl}/movies`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(dataMovie)
        })
        .then(this._checkResponse);
    }

    // Запрос удаления фильма из избранного
    deleteSavedMovie(movieId) {
        return fetch (`${this._baseUrl}/movies/${movieId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(this._checkResponse);
    }
}

const mainApi = new MainApi({
    baseUrl: 'https://api.damovies-explorer.nomoredomains.rocks',
  });

export default mainApi;