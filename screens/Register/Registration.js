import {SafeAreaView, ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import globalStyle from '../../assets/styles/globalStyle';
import Input from '../../components/Input/Input';
import style from './style';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import BackButton from '../../components/BackButton/BackButton';
import {createUser} from '../../api/user';
import {Routes} from '../../navigation/Routes';
import {Text} from 'react-native-gesture-handler';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

const Registration = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  // console.log(fullName);
  // console.log(email);
  // console.log(password);

  // const validateEmail = email => {
  //   const re = /\S+@\S+\.\S+/;
  //   return re.test(email);
  // };

  // const validatePassword = password => {
  //   return password.length < 8;
  // };

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View style={style.backButton}>
        <BackButton onPress={() => navigation.goBack()} icon={faArrowLeft} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}>
        <View style={globalStyle.marginBottom24}>
          <Header types={1} title={'Hello and Welcome !'} />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            label={'First & Last Name'}
            placeHolder={'Enter your full name'}
            onChangeText={value => setFullName(value)}
          />
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
        {success.length > 0 && <Text style={style.success}>{success} </Text>}
        <View style={globalStyle.marginBottom24}>
          <Button
            isDisabled={
              fullName.length <= 2 || email.length <= 5 || password.length < 8
            }
            title={'Registration'}
            onPress={async () => {
              let user = await createUser(fullName, email, password);
              if (user.error) {
                setError(user.error);
              } else {
                setError('');
                setSuccess('Registration successful!');
                setTimeout(() => {
                  navigation.navigate(Routes.Login);
                }, 1000);
              }
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Registration;
