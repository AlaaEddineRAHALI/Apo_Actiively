/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import {
  Routes, Route, useNavigate, Navigate,
} from 'react-router-dom';
import axios from 'axios';

import Home from './components/Home/home';
import Activity from './components/Activity/Activity';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Registration from './components/Registration/registration';
import Login from './components/Login/login';
import NotFound from './components/NotFound/NotFound';
import ActivityList from './components/ActivityList/ActivityList';
import Profil from './components/Profil/profil';
import ModifProfil from './components/ModifProfil/modifProfil';
import CreateActivity from './components/CreateActivity/createActivity';
import OrganismActivities from './components/OrganismActivities/OrganismActivities';

import useToken from './components/Hooks/useToken';

import './styles/index.scss';

function App() {
  const [keyword, setkeyword] = useState('');
  const [results, setResults] = useState([]);
  // To enable redirection
  const navigate = useNavigate();

  // Login Feature
  // Hook created to manage token
  const { token, setToken } = useToken();
  const [isLogged, setIsLogged] = useState(false);
  console.log(isLogged);

  // Search Feature
  const postData = () => {
    if (!keyword.keyword || !keyword.zip_code) {
      return;
    }

    axios.post('http://localhost:3001/api/v1/activity/search', {
      keyword: keyword.keyword,
      zip_code: keyword.zip_code,
    })
      .then((res) => {
        setResults(res.data);
        // console.log('results: ', res.data);
      });
  };

  useEffect(
    () => {
      postData();
    },
    [keyword],
  );

  // Login still active on refresh
  useEffect(
    () => {
      if (token) {
        setIsLogged(true);
      }
    },
    [],
  );

  const handleClick = (e, activity) => {
    e.preventDefault();
    const act = `${activity.keyword}%`;
    const key = `${activity.zip_code}%`;
    setkeyword({
      keyword: act,
      zip_code: key,
    });
    // Redirection to results page on click on Submit
    navigate('/activity');
  };

  return (
    <div className="App">
      <Header
        isLogged={isLogged}
        setIsLogged={setIsLogged}
        setToken={setToken}
      />
      <Routes>
        <Route
          path="/"
          element={(
            <Home
              handle={handleClick}
            />
          )}
        />
        <Route
          path="/activity"
          element={(
            <ActivityList
              results={results}
            />
          )}
        />
        <Route
          path="/activity/:id"
          element={(
            <Activity />
          )}
        />
        <Route
          path="/register"
          element={<Registration />}
        />
        <Route
          path="/login"
          element={(
            <Login
              setToken={setToken}
              setIsLogged={setIsLogged}
              isLogged={isLogged}
            />
          )}
        />
        <Route
          path="/organism/profile"
          // Restricted page
          element={isLogged ? <Profil token={token} /> : <Navigate replace to="/login" />}
        />
        <Route
          path="/organism/profile/edit"
          element={<ModifProfil />}
        />
        <Route
          path="/organism/create"
          element={<CreateActivity />}
        />
        <Route
          path="/organism/activities"
          element={(
            <OrganismActivities
              token={token}
              setIsLogged={setIsLogged}
            />
          )}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
