export const BASE_URL = 'https://api.damovies-explorer.nomoredomains.rocks';

function getResponse(res) {
  console.log(res);
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
}

export const register = (data) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(getResponse)
};

export const login = (data) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(getResponse)
  .then((data) => {
    console.log(data);
    if (data.token){
      localStorage.setItem('token', data.token);
      return data;
    }
  })
};
