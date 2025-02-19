import {StyleSheet} from 'react-native';
import {scaleFontSize} from '../../assets/styles/scalling';

const style = StyleSheet.create({
  title1: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(24),
    lineHeight: scaleFontSize(29),
    fontWeight: '700',
  },
  title2: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(18),
    lineHeight: scaleFontSize(22),
    fontWeight: '700',
  },
  title3: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
    fontWeight: '700',
  },
});

export default style;
