import { createGlobalTheme, globalFontFace } from '@vanilla-extract/css';

export const colors = {
  black: '#3C4043',
  white: '#FFFFFF',
  red: '#E26559',
  danger: '#B55147',
  default: '#636669',
  light: '#8A8C8E',
  gray: '#EBECEC',
  dangerActive: '#883D35',
};

export const gap = {
  small: 2.5,
  medium: 5,
  big: 10,
  large: 20,
  larger: 30,
};

export const size = {
  small: '12px',
  medium: '14px',
  normal: '16px',
  big: '20px',
  bigger: '22px',
  large: '24px',
};
export const weight = {
  bold: 400,
  bolder: 500,
  boldest: 700,
};

const Montserrat = 'Montserrat';
globalFontFace(Montserrat, {
  src: "url('https://fonts.googleapis.com/css?family=Montserrat')",
  fontDisplay: 'swap',
});

export const vars = createGlobalTheme(':root', {
  vars: {
    progressBarBackground: colors.red,
    progressBarColor: colors.red,
    buttonColor: colors.white,
    featureDesc: colors.light,
    titleDesc: colors.default,
    titleColor: colors.black,
    buttonHoverBg: colors.danger,
    buttonActiveBg: colors.dangerActive,
    fontFamily: Montserrat,
    bacKground: 'gray',
  },
});
