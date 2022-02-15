import React, { useState } from 'react';

function Track({ track, hideButton, addTrack }) {
  const {
    name,
    artists,
    album: { images },
  } = track;

  return (
    <div className="track">
      <img src={images[0].url} alt="Track" />
      <div className="info">
        <h3>{name}</h3>
        <div>
          <ul>
            {artists.map((artist) => (
              <li key={artist.id}>{artist.name}</li>
            ))}
          </ul>
        </div>

        {!hideButton ? (
          <button type="button" onClick={addTrack}>
            Add
          </button>
        ) : (
          'None'
        )}
      </div>
    </div>
  );
}

export default Track;
