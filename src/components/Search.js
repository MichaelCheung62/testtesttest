import React, { useState } from 'react';

import { searchQuery } from '../spotify';

import Track from './Track';

function Search({ token, tracks, setTracks }) {
  const [searchInput, setSearchInput] = useState('');
  const [results, setResults] = useState([]);

  const performSearch = async (searchInput) => {
    const items = await searchQuery(token, 'track', searchInput);
    console.log(items);
    setResults(items);
  };

  const addTrack = (track) => {
    const trackExists = tracks.some((item) => item.id === track.id);
    if (trackExists) return;

    const trackInfo = {
      id: track.id,
      name: track.name,
      artists: track.artists,
      duration: track.duration,
      album: {
        images: track.album.images,
      },
    };

    setTracks([...tracks, trackInfo]);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          performSearch(searchInput);
        }}
      >
        <input type="text" onChange={(e) => setSearchInput(e.target.value)} />
        <button type={'submit'}>Search</button>
      </form>
      {results &&
        results.map((result) => (
          <div key={result.id} onClick={(e) => addTrack(result)} id={result.id}>
            <Track track={result} hideButton={false} />
          </div>
        ))}
    </div>
  );
}

export default Search;
