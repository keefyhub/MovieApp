import React, { Component } from 'react';
import {
  Dimensions,
  ListView,
  Image,
  ScrollView,
  Text,
  View
} from 'react-native';

import styles from './Stylesheet';
import AutoHeightImage from 'react-native-auto-height-image';

var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;

export default class MoviePage extends Component {
  castList() {
    var cast = this.props.navigation.state.params.movie.abridged_cast;

    return cast.map(function(cast, i) {
      return(
        <View key={i}>
        <Text>{cast.name}</Text>
        </View>
      );
    });
  }

  showCastList() {
    var showCast = this.props.navigation.state.params.movie.abridged_cast.length ? true : false;

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
    console.log(this.props.navigation.state.params.movie);
    var movie = this.props.navigation.state.params.movie;

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
