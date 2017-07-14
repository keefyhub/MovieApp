import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import styles from './Stylesheet';
import SearchPage from './SearchPage';
import MoviePage from './MoviePage';

var REQUEST_URL = 'https://raw.githubusercontent.com/keefyhub/MovieApp/develop/Movies.json';

const MovieApp = StackNavigator({
  Home: {
    screen: SearchPage,
    navigationOptions: ({navigation}) => ({
      title: 'Films'
    }),
  },
  Movie: {
    screen: MoviePage,
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.movie.title}`
    }),
  }
});

AppRegistry.registerComponent('MovieApp', () => MovieApp);
