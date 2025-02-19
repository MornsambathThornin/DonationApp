import React from 'react';
import {SafeAreaView} from 'react-native';

import Header from '../../components/Header/Header';

// import style from './style';
import globalStyle from '../../assets/styles/globalStyle';
import Button from '../../components/Button/Button';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title={'Thornin Morn.'} types={1} />
      <Button
        title={'Donate'}
        onPress={() => {
          console.log('Donate button pressed');
        }}
      />
      <Button title={'Donate'} isDisabled={true} />
    </SafeAreaView>
  );
};

export default Home;
