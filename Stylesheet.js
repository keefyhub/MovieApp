import { StyleSheet } from 'react-native';

var $backgroundColor = '#F5FCFF';

export default StyleSheet.create({
  container: {
    backgroundColor: $backgroundColor,
    flex: 1
  },
  listView: {
    backgroundColor: $backgroundColor,
    flex: 1,
    marginTop: 20
  },
  movieContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between'
  },
  thumbnail: {
    height: 81,
    width: 53
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 20
  },
  title: {
    fontSize: 20
  }
});
