import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  Dimensions,
  ListView,
  Image,
  NavigatorIOS,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import styles from './Stylesheet';
import AutoHeightImage from 'react-native-auto-height-image';

var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;

var REQUEST_URL = 'https://raw.githubusercontent.com/keefyhub/MovieApp/develop/Movies.json';

export default class MoviePage extends Component {
  castList() {
    var cast = this.props.movie.abridged_cast;

    return cast.map(function(cast, i) {
      return(
        <View key={i}>
        <Text>{cast.name}</Text>
        </View>
      );
    });
  }

  showCastList() {
    var showCast = this.props.movie.abridged_cast.length ? true : false;

    if(showCast) {
      return (
        <View>
          <Text>Cast List</Text>
          <View>{this.castList()}</View>
        </View>
      );
    } else {
      return (
        <Text>No cast listing available</Text>
      );
    }
  }

  render() {
    var movie = this.props.movie;

    return (
      <ScrollView style={styles.scrollView}>
        <AutoHeightImage width={screenWidth} imageURL={movie.posters.original} />
        <Text style={styles.title}>
          {movie.title}
        </Text>
        <Text>
          {movie.mpaa_rating}
        </Text>
        {this.showCastList()}
      </ScrollView>
    );
  }
}
