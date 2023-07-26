export const BASE_URL = 'http://localhost:3000';

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

// export const checkToken = (token) => {
//   return fetch(`${BASE_URL}/users/me`, {
//     method: 'GET',
//     headers: {
//       'Accept': 'application/json',
//       "Content-Type": "application/json",
//       "Authorization" : `Bearer ${token}`
//     }
//   })
//   .then(getResponse)
//   .then((data) => {
//     console.log(data)
//     return data
//   })
// }