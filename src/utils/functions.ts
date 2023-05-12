import {Dimensions} from 'react-native';

export const {width: WINDOW_WIDTH, height: WINDOW_HEIGHT} =
  Dimensions.get('window');
export function validateEmail(email: string) {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (reg.test(email) === false) {
    return false;
  } else {
    return true;
  }
}

export const isAllNumbers = (str: string) => /^\d+$/.test(str);
export const checkIsOtp = (str: string, otpLength: number) =>
  str && isAllNumbers(str) && str.length === otpLength;
