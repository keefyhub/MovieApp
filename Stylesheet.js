import {
  StyleSheet
} from 'react-native';

var $backgroundColor = '#F5FCFF';

export default StyleSheet.create({
  wrapper: {
    flex: 1
  },
  listView: {
    backgroundColor: $backgroundColor,
    flex: 1,
  },
  movieListContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between'
  },
  movieListThumbnail: {
    height: 81,
    width: 53
  },
  movieListContent: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 20
  },
  scrollView: {
    flex: 1
  },
  title: {
    fontSize: 20
  }
});
