import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  ListView,
  Image,
  NavigatorIOS,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import styles from './Stylesheet';
import SearchPage from './SearchPage';

var REQUEST_URL = 'https://raw.githubusercontent.com/keefyhub/MovieApp/develop/Movies.json';

export default class MovieApp extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.nav}
        initialRoute={{
          title: 'Films',
          component: SearchPage
        }}/>
    );
  }
}

AppRegistry.registerComponent('MovieApp', () => MovieApp);
