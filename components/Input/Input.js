import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import style from './styles';

const Input = ({
  label,
  placeHolder,
  onChangeText = () => {},
  keyboardType,
  secureTextEntry = false,
}) => {
  const [value, setValue] = useState('');

  return (
    <View>
      <Text style={style.label}>{label}</Text>
      <TextInput
        placeholder={placeHolder ? placeHolder : null}
        style={style.input}
        value={value}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType ? keyboardType : 'default'}
        onChangeText={val => {
          setValue(val);
          onChangeText(val);
        }}
      />
    </View>
  );
};

Input.propTypes = {
  placeHolder: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChangeText: PropTypes.func,
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
};

export default Input;
