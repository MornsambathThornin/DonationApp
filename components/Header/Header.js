import {View, Text} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import style from './styles';

const Header = ({title = '', types = 1}) => {
  const styleToApply = () => {
    switch (types) {
      case 1:
        return style.title1;
      case 2:
        return style.title2;
      case 3:
        return style.title3;
      default:
        return style.title1;
    }
  };

  return (
    <View>
      <Text style={styleToApply()}>{title}</Text>
    </View>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  types: PropTypes.number,
};

export default Header;
