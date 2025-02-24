import {StyleSheet} from 'react-native';
import {scaleFontSize, verticalScale} from '../../assets/styles/scalling';

const style = StyleSheet.create({
  label: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: scaleFontSize(12),
    lineHeight: scaleFontSize(16),
    color: '#36455A',
    // marginBottom: 10,
  },

  input: {
    paddingVertical: verticalScale(12),
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(167,167,167,0.5)',
  },
});

export default style;
