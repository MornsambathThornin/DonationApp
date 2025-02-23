import {StyleSheet} from 'react-native';
import {horizontalScale} from '../../assets/styles/scalling';

const style = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    borderRadius: horizontalScale(26),
    alignItems: 'center',
    justifyContent: 'center',
    width: horizontalScale(44),
    height: horizontalScale(44),
  },
});

export default style;
