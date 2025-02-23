import {Pressable} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import style from './style';

const BackButton = props => {
  return (
    <Pressable onPress={() => props.onPress()} style={style.container}>
      <FontAwesomeIcon icon={faArrowLeft} size={20} color="#0A043C" />
    </Pressable>
  );
};

BackButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default BackButton;
