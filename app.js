import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import styles from './Stylesheet';
import SearchPage from './SearchPage';
import MoviePage from './MoviePage';

var REQUEST_URL = 'https://raw.githubusercontent.com/keefyhub/MovieApp/develop/Movies.json';

const MovieApp = DrawerNavigator({
  Home: {
    screen: SearchPage
  },
  Movie: {
    screen: MoviePage
  }
});

AppRegistry.registerComponent('MovieApp', () => MovieApp);
