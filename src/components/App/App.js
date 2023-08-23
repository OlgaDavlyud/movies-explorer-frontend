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
  const [tooltipMessage, setTooltipMessage] = useState({message: ""})
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
    return() => {window.removeEventListener('resize', handleChangeDisplaySize)};
  }, [])

  // Функция регистрации
  const handleRegister = (data) => {
    Auth.register({
      name: data.name,
      email: data.email,
      password: data.password
    })
      .then((res) => {
        return Auth.login({
          email: data.email,
          password: data.password
        })
      })
      .then((res) => {
        setLoggedIn(true);
        setCurrentUser({data});
        navigate("/movies", { replace: true });
      })
      .catch(err => {
        if (err === 409) {
          openInfoTooltip();
          setTooltipMessage({message: "Пользователь с таким email уже существует"});
      } else {
        openInfoTooltip();
        setTooltipMessage({message: "Что-то не так. Повторите попытку"});
      }
    })
  };

  // Функция авторизации
  function handleLogin(data) {
    Auth.login({
      email: data.email,
      password: data.password
    })
      .then((data) => {
        if (data.token) {
          setLoggedIn(true);
          navigate("/movies", { replace: true });
        }
      })
      .catch(err => {
        console.log(err)
      if(err === 401) {
          openInfoTooltip();
          setTooltipMessage({message: "Неправильный логин или пароль"});
      } else {
        openInfoTooltip();
        setTooltipMessage({message: "Что-то не так. Повторите попытку"});
      }
    })
  }

  // Функция редактирования данных профиля
  const handleUpdateUserData = (data) => {
    mainApi
    .changeUserData(data)
    .then((user) => {
      console.log(user)
      setIsEditData(false);
      setCurrentUser(user);
      openInfoTooltip();
      setTooltipMessage({message: "Данные успешно изменены"});
    })
    .catch((err) => {
      if (err === 409) {
        openInfoTooltip();
        setTooltipMessage({message: "Пользователь с таким email уже существует"});
      } else {
        openInfoTooltip();
        setTooltipMessage({message: "Что-то не так. Повторите попытку"});
      }
    })
  }

  function handleSignOut() {
    localStorage.clear();
    setLoggedIn(false);
    navigate("/", { replace: true });
  }

  function openInfoTooltip() {
    setIsInfoTooltip(true);
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
                  loggedIn={loggedIn}
                />
              }
            ></Route>
            <Route
              path="/saved-movies"
              element={
                <ProtectedRouteElement
                  element={SavedMovies}
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
          text={tooltipMessage.message}
          />
      </div>
  </CurrentUserContext.Provider>
  );
}

export default App;
