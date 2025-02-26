import {Pressable} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import style from './style';

const BackButton = ({onPress, icon, color = '#0A043C'}) => {
  return (
    <Pressable onPress={onPress} style={style.container}>
      <FontAwesomeIcon icon={icon} size={20} color={color} />
    </Pressable>
  );
};

BackButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  icon: PropTypes.object.isRequired,
  color: PropTypes.string,
};

export default BackButton;
