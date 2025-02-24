import {Pressable, SafeAreaView, ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import globalStyle from '../../assets/styles/globalStyle';
import Input from '../../components/Input/Input';
import style from './style';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // console.log(email);
  // console.log(password);

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}>
        <View style={globalStyle.marginBottom24}>
          <Header types={1} title={'Welcome Back'} />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            label={'Email'}
            placeHolder={'example@gmail.com'}
            onChangeText={value => setEmail(value)}
            keyboardType={'email-address'}
          />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            label={'Password'}
            placeHolder={'Password'}
            onChangeText={value => setPassword(value)}
            secureTextEntry={true}
          />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Button
            title={'Login'}
            onPress={() => {
              console.log('Login button clicked');
            }}
          />
        </View>
        <Pressable
          onPress={() => {
            console.log('Registration button clicked');
          }}
          style={style.registrationButton}>
          <Header
            types={3}
            title={"Don't have an account?"}
            color="rgba(21, 108,247,1)"
          />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
