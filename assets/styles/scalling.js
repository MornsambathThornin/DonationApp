import {Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const {width, height} = Dimensions.get('window');

const isSmall = width <= 375 && !DeviceInfo.hasNotch();

const guildLineBaseWidth = () => {
  if (isSmall) {
    return 330;
  }
  return 350;
};

const guildLineBaseHeight = () => {
  if (isSmall) {
    return 550;
  } else if (width > 410) {
    return 620;
  }
  return 680;
};

const guildlineBaseFont = () => {
  if (width > 410) {
    return 430;
  }
  return 400;
};

const horizontalScale = size => (width / guildLineBaseWidth()) * size;

const verticalScale = size => (height / guildLineBaseHeight()) * size;

const scaleFontSize = size => Math.round((size * width) / guildlineBaseFont());

export {horizontalScale, verticalScale, scaleFontSize};
