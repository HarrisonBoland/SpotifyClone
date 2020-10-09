import React, { useEffect, useState } from 'react';

import SpotifyWebApi from 'spotify-web-api-js';
import Login from './Login';
import Player from './Player';
import { useDataLayerValue } from './DataLayer'
import { getTokenFromResponse } from './spotify';
import './App.css';

const spotify = new SpotifyWebApi();

function App() {
  const [{user, token}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })

      spotify.setAccessToken(_token);
      
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user
        })
      })
    }

    console.log('I HAVE A TOKEN => ', _token);
  }, []);

  console.log('user', user)
  console.log('token', token)

  return (
    <div className="app">{token ? <Player /> : <Login />}</div>
  );
}

export default App;
