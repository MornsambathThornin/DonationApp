import {Pressable, SafeAreaView, ScrollView, Text, View} from 'react-native';
import React, {useState} from 'react';
import globalStyle from '../../assets/styles/globalStyle';
import Input from '../../components/Input/Input';
import style from './style';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import {Routes} from '../../navigation/Routes';
import {loginUser} from '../../api/user';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

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
        {error.length > 0 && <Text style={style.error}>{error} </Text>}
        {/* {success.length > 0 && <Text style={style.success}>{success} </Text>} */}
        <View style={globalStyle.marginBottom24}>
          <Button
            isDisabled={email.length < 5 || password.length < 8}
            title={'Login'}
            onPress={async () => {
              let user = await loginUser(email, password);
              if (!user.status) {
                setError(user.error);
              } else {
                setError('');
                navigation.navigate(Routes.Home);
              }
            }}
          />
        </View>
        <Pressable
          onPress={() => navigation.navigate(Routes.Registration)}
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
