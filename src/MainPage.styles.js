import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    display: 'flex',
    backgroundColor: 'white',
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  firstContainer: {
    backgroundColor: 'red',
  },
  secondContainer: {
    backgroundColor: 'yellow',
  },
  thirdContainer: {
    height: 200,
    backgroundColor: 'green',
  },

});

export default styles;
