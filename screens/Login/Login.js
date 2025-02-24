import {SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import globalStyle from '../../assets/styles/globalStyle';
import Input from '../../components/Input/Input';
import style from './style';

const Login = () => {
  const [email, setEmail] = useState('');

  console.log(email);

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}>
        <Input
          label={'Email'}
          placeHolder={'example@gmail.com'}
          onChangeText={value => setEmail(value)}
          keyboardType={'email-address'}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
