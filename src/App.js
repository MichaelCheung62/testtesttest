import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

import { getTokenFromUrl } from './spotify';

import Login from './components/Login';

function App() {
  const [spotifyToken, setSpotifyToken] = useState([]);

  useEffect(() => {
    const token = window.localStorage.getItem('token');

    if (token) {
      setSpotifyToken(token);
      return;
    }

    const accessToken = getTokenFromUrl();
    window.location.hash = '';

    if (!accessToken) {
      setSpotifyToken('');
      window.localStorage.removeItem('token');
      return;
    }

    setSpotifyToken(accessToken);
    window.localStorage.setItem('token', accessToken);
  }, []);

  return (
    <div className="App">
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
