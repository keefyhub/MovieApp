import {
  StyleSheet
} from 'react-native';

var $backgroundColor = '#F5FCFF',
    $lighterBackgroundColor = 'rgba(255, 255, 255, .6)';

export default StyleSheet.create({
  wrapper: {
    flex: 1
  },
  movieListContainer: {
    backgroundColor: $backgroundColor,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  nthEven: {
    backgroundColor: $lighterBackgroundColor
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
