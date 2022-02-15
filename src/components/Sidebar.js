import React from 'react';

import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create">Create Playlist</Link>
        </li>
        <li>
          <Link to="/playlists">Playlists</Link>
        </li>
        <li>
          <Link to="/Favorites">Favorites</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
