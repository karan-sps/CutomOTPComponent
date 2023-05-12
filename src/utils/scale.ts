import {WINDOW_HEIGHT, WINDOW_WIDTH} from './functions';

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const horizontalScale = (size: number) =>
  (WINDOW_WIDTH / guidelineBaseWidth) * size;
const verticalScale = (size: number) =>
  (WINDOW_HEIGHT / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

export {horizontalScale, verticalScale, moderateScale};
