import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scalling';

const style = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(24),
    flex: 1,
    justifyContent: 'center',
  },
  registrationButton: {
    alignItems: 'center',
  },
  error: {
    color: '#FF0000',
    fontFamily: 'Inter',
    fontSize: scaleFontSize(14),
    marginBottom: verticalScale(24),
  },

  // success: {
  //   color: '#28A745',
  //   fontFamily: 'Inter',
  //   fontSize: scaleFontSize(14),
  //   marginBottom: verticalScale(24),
  // },
});

export default style;
