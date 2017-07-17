import React, { Component } from 'react';
import {
  ListView,
  Image,
  ScrollView,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import styles from './Stylesheet';

var REQUEST_URL = 'https://raw.githubusercontent.com/keefyhub/MovieApp/develop/Movies.json';

export default class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: '',
      loaded: false
    };
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: responseData.movies,
          loaded: true
        });
      })
      .done();
  }

  componentDidMount() {
    this.fetchData();
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading movies...
        </Text>
      </View>
    );
  }

  onPressButton(movie) {
    const { navigate } = this.props.navigation;
    navigate('Movie', {movie: movie});
  }

  checkIndexIsEven (n) {
    return n % 2 == 0;
  }

  returnMovies(movie) {
    var movies = this.state.dataSource;

    return movies.map((movie, i) => {
      var rowStyle = this.checkIndexIsEven(i) ?  styles.movieListContainer: [styles.movieListContainer, styles.nthEven];

      return(
        <TouchableHighlight onPress={() => this.onPressButton(movie)} underlayColor="white" key={i}>
          <View style={rowStyle}>
            <Image
              source={{uri: movie.posters.thumbnail}}
              style={styles.movieListThumbnail}
            />
            <View style={styles.movieListContent}>
              <Text style={styles.title}>{movie.title}</Text>
              <Text style={styles.year}>{movie.year}</Text>
            </View>
          </View>
        </TouchableHighlight>
      );
    });
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ScrollView style={styles.wrapper}>
        {this.returnMovies()}
      </ScrollView>
    );
  }
}
