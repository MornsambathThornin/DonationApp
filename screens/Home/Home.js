import React from 'react';
import {SafeAreaView} from 'react-native';

import Header from '../../components/Header/Header';

// import style from './style';
import globalStyle from '../../assets/styles/globalStyle';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title={'Thornin Morn.'} types={1} />
      <Header title={'Thornin Morn.'} types={2} />
      <Header title={'Thornin Morn.'} types={3} />
    </SafeAreaView>
  );
};

export default Home;
