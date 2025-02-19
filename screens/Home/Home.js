import React from 'react';
import {SafeAreaView} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

import globalStyle from '../../assets/styles/globalStyle';
// import style from './style';

import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Tab from '../../components/Tab/Tab';
import Badge from '../../components/Badge/Badge';
import Search from '../../components/Search/Search';

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
      <Tab title={'Tab 1'} />
      <Tab title={'Tab 2'} isInactive={true} />
      <Badge title={'Badges'} />
      <FontAwesomeIcon icon={faSearch} />
      <Search
        onSearch={value => {
          console.log({value});
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
