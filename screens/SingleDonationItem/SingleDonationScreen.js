import {SafeAreaView, ScrollView, Image, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import globalStyle from '../../assets/styles/globalStyle';
import BackButton from '../../components/BackButton/BackButton';
import style from './style';
import Badge from '../../components/Badge/Badge';
import Header from '../../components/Header/Header';
import {Text} from 'react-native-gesture-handler';
import Button from '../../components/Button/Button';

const SingleDonationScreen = ({navigation, route}) => {
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );

  const categoryInformation = route.params.categoryInfomation;

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        <BackButton onPress={() => navigation.goBack()} />
        <Image
          source={{uri: donationItemInformation.image}}
          style={style.image}
        />
        <View style={style.badge}>
          <Badge title={categoryInformation.name} />
        </View>
        <Header types={1} title={donationItemInformation.name} />
        <Text style={style.description}>
          {donationItemInformation.description}
        </Text>
      </ScrollView>
      <View style={style.button}>
        <Button title={'Donate'} onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

export default SingleDonationScreen;
