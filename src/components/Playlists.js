import React, { useEffect, useState } from 'react';

import { getPlaylists } from '../utils';

import Playlist from './Playlist';

function Playlists() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const loadPlaylists = async () => {
      const data = await getPlaylists();

      setPlaylists(data);
    };

    loadPlaylists();
  }, []);

  return (
    <div>
      {playlists.length > 0 ? (
        playlists.map((playlist) => (
          <Playlist key={playlist.id} playlist={playlist} hideButton={true} />
        ))
      ) : (
        <h2>You currently have no playlists. Go create some!</h2>
      )}
    </div>
  );
}

export default Playlists;
