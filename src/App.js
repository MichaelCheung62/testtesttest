import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Button from './components/Button';

import { getTokenFromUrl, getExpiresInFromUrl } from './spotify';

import Login from './components/Login';

function App() {
  const [spotifyToken, setSpotifyToken] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  useEffect(() => {
    const expires = parseInt(window.localStorage.getItem('expires'));

    if (expires) {
      if (Date.now() / 1000 > expires) {
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('expires');
      }
    }

    const token = window.localStorage.getItem('token');

    if (token) {
      setSpotifyToken(token);
      return;
    }

    const accessToken = getTokenFromUrl();
    const expiresIn = getExpiresInFromUrl();

    window.location.hash = '';

    if (!accessToken) {
      setSpotifyToken('');
      window.localStorage.removeItem('token');
      return;
    }

    setSpotifyToken(accessToken);
    window.localStorage.setItem('token', accessToken);

    const currentTime = Math.floor(Date.now() / 1000 + expiresIn);
    console.log(currentTime);
    window.localStorage.setItem('expires', currentTime);
  }, []);

  return (
    <div className={'App ' + (isDarkMode ? 'dark' : 'light')}>
      <Button isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      {!spotifyToken ? (
        <Login />
      ) : (
        <div>
          {/* <Search token={spotifyToken} setData={setData} />

          <div>
            {data.map((item) => (
              <div key={item.id}>{item.name}</div>
            ))}
          </div> */}

          {/* <CreatePlaylist /> */}
        </div>
      )}
    </div>
  );
}

export default App;
