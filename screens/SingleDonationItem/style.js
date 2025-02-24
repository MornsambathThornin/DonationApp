import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scalling';

const style = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(20),
    marginTop: verticalScale(7),
  },
  image: {
    marginVertical: verticalScale(20),
    width: '100%',
    height: verticalScale(240),
    borderRadius: verticalScale(10),
  },

  badge: {
    marginBottom: verticalScale(16),
  },

  description: {
    marginVertical: verticalScale(7),
    marginHorizontal: horizontalScale(7),
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: scaleFontSize(14),
    lineHeight: verticalScale(16),
  },

  button: {
    marginHorizontal: horizontalScale(20),
    marginBottom: verticalScale(20),
  },
});

export default style;
