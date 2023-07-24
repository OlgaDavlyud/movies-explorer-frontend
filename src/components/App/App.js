import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
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

import mainApi from "../../utils/Api/MainApi";
import * as Auth from "../../utils/Api/Auth";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [isEditData, setIsEditData] = useState(false);
  const [isInfoTooltip, setIsInfoTooltip] = useState(false);
  const [displaySize, setDisplaySize] = useState(window.innerWidth);

  const navigate = useNavigate();
  const { pathname } = useLocation();

// Отображение данных пользователя
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      mainApi.getInitialUserData(token)
        .then((user) => {
          if (user) {
            const dataUser = {
              name: user.name,
              email: user.email
            }
            setLoggedIn(true);
            setCurrentUser(dataUser);
            navigate(pathname, { replace: true });
          }
        })
        .catch(err => console.log(err));
    }
  }, [loggedIn]);

  useEffect(() => {
    const handleChangeDisplaySize = (evt) => {
      setDisplaySize(evt.target.innerWidth)
    }
    window.addEventListener('resize', handleChangeDisplaySize)
    return window.removeEventListener('resize', handleChangeDisplaySize);
  }, [])


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
      setIsEditData(false);
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

  function openInfoTooltip() {
    setIsInfoTooltip(!isInfoTooltip);
  }

  function closeInfoTooltip() {
    setIsInfoTooltip(false);
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
                  displaySize={displaySize}
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
                  setIsEditData={setIsEditData}
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
