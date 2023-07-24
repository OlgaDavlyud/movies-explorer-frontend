import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import '../../index.css'
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile  from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import Footer from '../Footer/Footer';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

import moviesApi from "../../utils/Api/MoviesApi";
import mainApi from "../../utils/Api/MainApi";
import * as Auth from "../../utils/Api/Auth";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);

  const [loggedIn, setLoggedIn] = useState(false);
  const [isEditData, setIsEditData] = useState(false);
  const [isInfoTooltip, setIsInfoTooltip] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      Auth.checkToken(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            navigate("/movies", { replace: true });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

    // Функция регистрации
  const handleRegister = (name, email, password) => {
    Auth.register(name, email, password)
      .then((res) => {
        setLoggedIn(true);
        setCurrentUser({name, email});
        navigate("/movies", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Функция авторизации
  function handleLogin(email, password) {
    console.log(email, password);
    Auth.login(email, password)
      .then((data) => {
        if (data.token) {
          setLoggedIn(true);
          navigate("/movies", { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Отображение фильмов сразу, чтоб работать с карточками фильма
  useEffect(() => {
    if (loggedIn) {
      Promise.all([moviesApi.getInitialMovies()])
      .then(([dataMovies]) => {
        setMovies(dataMovies);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }, [loggedIn]);

  // Отображение данных пользователя
  useEffect(() => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');

      if (token) {
        mainApi.getInitialUserData(token)
          .then((res) => {
            if (res) {
              const dataUser = {
                name: res.name,
                email: res.email
              }
              setLoggedIn(true);
              setCurrentUser(dataUser);
              navigate("/profile", { replace: true });
            }
          })
          .catch(err => console.log(err));
      }
    }
  }, [loggedIn]);

// Отображение пустой страницы без фильмов
  // useEffect(() =>{
  //   if (loggedIn) {
  //   renderWithData();
  //   }
  // }, []);

// Нерабочая функция отображения фильмов (нет запроса для отображения)
  // function renderWithData() {
  //     Promise.all([moviesApi.getInitialMovies()])
  //       .then(([dataMovies]) => {
  //         setMovies(dataMovies);
  //       })
  //       .then(([dataMovies]) => {
  //         setTimeout(() => {
  //         console.log(dataMovies);
  //         }, 10000)
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //     });
  // };


  function openInfoTooltip() {
    setIsInfoTooltip(!isInfoTooltip);
  }

  function closeInfoTooltip() {
    setIsInfoTooltip(false);
  }

  //Функция сохранения(лайка) фильма
  // const handleLikeMovie = (movie) => {
  //   const isLiked = movie.likes.some((i) => i._id === currentUser._id);

  //   mainApi
  //     .changeLikeMoviesStatus(movie._id, !isLiked)
  //     .than((newMovie) => {
  //       setMovies((movies) =>
  //        movies.map((c) => (c._id === movie._id ? newMovie : c))
  //       );
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // Функция добавления фильма в избранное
  // const handleSavedMovie = (data) => {
  //   mainApi
  //   .addSavedMovie(data)
  //   .then((newMovie) => {
  //     setMovies([newMovie, ...movies]);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  // }

   //Функция удаления фильма их сохраненных фильма
  // const handleDeleteMovie = (movieId) => {
  //   mainApi
  //     .deleteSavedMovie(movieId)
  //     .then((data) => {
  //       console.log(data);
  //       setMovies((movies) => movies.filter((c) => c._id!== movieId));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  // Функция редактирования данных профиля
  const handleUpdateUserData = (data) => {
    mainApi
    .changeUserData(data)
    .then((user) => {
      console.log(user)
      setIsEditData(true);
      setCurrentUser(user);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function handleSignOut() {
    localStorage.clear();
    setLoggedIn(false);
    navigate("/", { replace: true });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header loggedIn={loggedIn}/>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route
              path="/movies"
              element={
                <ProtectedRouteElement
                  element={Movies}
                  movies={movies}
                  // onCardLike={handleLikeMovie}
                  // onSaveMovie={handleSavedMovie}
                  loggedIn={loggedIn}
                />
              }
            ></Route>
            <Route
              path="/saved-movies"
              element={
                <ProtectedRouteElement
                  element={SavedMovies}
                  movies={movies}
                  //onCardDelite={handleDeleteMovie}
                  loggedIn={loggedIn}
                />
              }
            ></Route>
            <Route
              path="/profile"
              element={
                <ProtectedRouteElement
                  element={Profile}
                  isEditData={isEditData}
                  onUpdateUser={handleUpdateUserData}
                  onSignOut={handleSignOut}
                  loggedIn={loggedIn}
                />
              }
            ></Route>
          <Route path="/signin" element={<Login onLogin={handleLogin} />}/>
          <Route path="/signup" element={<Register onRegister={handleRegister} />}/>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
        <InfoTooltip
          isOpen={isInfoTooltip}
          onClose={closeInfoTooltip}
          textError="Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
        />
      </div>
  </CurrentUserContext.Provider>
  );
}

export default App;
