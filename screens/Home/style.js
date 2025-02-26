import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scalling';

const style = StyleSheet.create({
  header: {
    marginTop: verticalScale(10),
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
    width: 50,
    height: 50,
    borderRadius: 100,
    marginRight: horizontalScale(15),
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

  donationItemsContainer: {
    marginHorizontal: horizontalScale(24),
    marginTop: verticalScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },

  singleDonationItem: {
    maxWidth: '49%',
    marginBottom: verticalScale(23),
  },
});

export default style;
