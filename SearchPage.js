import React, { Component } from 'react';
import {
  ListView,
  Image,
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
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
          loaded: true,
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

  renderMovie(movie) {
    const { navigate } = this.props.navigation;
    return (
      <TouchableHighlight onPress={() => this.onPressButton(movie)} underlayColor="white">
        <View style={styles.movieListContainer}>
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
  }

  onPressButton(movie) {
    const { navigate } = this.props.navigation;
    navigate('Movie', {movie: movie});
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <View style={styles.wrapper}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderMovie.bind(this)}
          style={styles.listView}
        />
      </View>
    );
  }
}
