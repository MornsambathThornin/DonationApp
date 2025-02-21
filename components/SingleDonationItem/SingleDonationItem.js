import React from 'react';
import {View, Image, Pressable} from 'react-native';
import PropTypes from 'prop-types';

import Badge from '../Badge/Badge';
import Header from '../Header/Header';
import style from './style';

const SingleDonationItem = ({
  url,
  badgeTitle,
  donationTitle,
  price,
  onPress = () => {},
  donationItemId,
}) => {
  return (
    <Pressable
      onPress={() => {
        onPress(donationItemId);
      }}>
      <View>
        <View style={style.badge}>
          <Badge title={badgeTitle} />
        </View>
        <Image resizeMode="cover" source={{uri: url}} style={style.image} />
      </View>
      <View style={style.donationDetails}>
        <Header
          title={donationTitle}
          types={3}
          color={'#0A043C'}
          numberOfLine={1}
        />
        <View style={style.price}>
          <Header title={'$' + price.toFixed(2)} types={3} color={'#156CF7'} />
        </View>
      </View>
    </Pressable>
  );
};

SingleDonationItem.propTypes = {
  url: PropTypes.string.isRequired,
  badgeTitle: PropTypes.string.isRequired,
  donationTitle: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onPress: PropTypes.func,
  donationItemId: PropTypes.number.isRequired,
};

export default SingleDonationItem;
