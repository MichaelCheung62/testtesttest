import React from 'react';

import Track from './Track';

function Playlist({ playlist, hideButton }) {
  console.log(playlist);
  return (
    <div>
      <h3>{playlist.title}</h3>
      {playlist.tracks.map((track) => (
        // <div>{`${track.title} - ${track.artist}`}</div>
        <Track track={track} hideButton={hideButton} />
      ))}
    </div>
  );
}

export default Playlist;
