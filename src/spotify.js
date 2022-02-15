import axios from 'axios';

const CLIENT_ID = '96d861f15ff0490ab03a6b1df56db9b3';
// const CLIENT_ID = '05d1f8b5f6bc4229a77310e45fa6fb4b';
const REDIRECT_URI = 'http://localhost:3000';
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const RESPONSE_TYPE = 'token';

export const loginUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;

const SEARCH_ENDPOINT = 'https://api.spotify.com/v1/search/';
const ME_ENDPOINT = 'https://api.spotify.com/v1/me/';
const CATEGORIES_ENDPOINT = 'https://api.spotify.com/v1/browse/categories/';

export const getTokenFromUrl = () => {
  const hash = window.location.hash;

  if (!hash) return;

  const token = hash
    .substring(1)
    .split('&')
    .find((element) => element.startsWith('access_token'))
    .split('=')[1];

  return token;
};

export const searchQuery = async (token, type = 'artist', query) => {
  const { data } = await axios.get(SEARCH_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      q: query,
      type: type,
    },
  });

  const items = Object.values(data)[0].items;

  // console.log(items);

  return items;
};

export const getMe = async (token) => {
  const { data } = await axios.get(ME_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  console.log(data);
};

export const getCategories = async (token) => {
  const { data } = await axios.get(CATEGORIES_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  console.log(data);
};

export const getSongsInCategory = async (token, id) => {
  const { data } = await axios.get(CATEGORIES_ENDPOINT + id + '/playlists', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  console.log(data);
};
