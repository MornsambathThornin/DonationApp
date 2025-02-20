import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scalling';

const style = StyleSheet.create({
  header: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(24),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerIntroText: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    lineHeight: verticalScale(19),
    fontWeight: '400',
    color: '#636776',
  },
  username: {
    marginTop: verticalScale(5),
  },
  profileImage: {
    width: horizontalScale(50),
    height: verticalScale(50),
    borderRadius: horizontalScale(50) / 2,
    // marginTop: verticalScale(10),
  },

  searchBox: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(24),
  },

  highlightImageContainer: {
    marginHorizontal: horizontalScale(24),
  },

  highlightImage: {
    width: '100%',
    height: verticalScale(160),
  },

  catagoryHeader: {
    marginHorizontal: horizontalScale(24),
    marginBottom: verticalScale(10),
  },
  categories: {
    marginLeft: horizontalScale(0),
  },

  categoryItem: {
    marginRight: horizontalScale(0),
  },
});

export default style;
