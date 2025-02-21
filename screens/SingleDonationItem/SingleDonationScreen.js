import {View, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const SingleDonationScreen = () => {
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );

  console.log(donationItemInformation);

  return (
    <View>
      <Text>SingleDonationScreen</Text>
    </View>
  );
};

export default SingleDonationScreen;
