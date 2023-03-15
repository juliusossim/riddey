import { style } from '@vanilla-extract/css';
import { colors, gap, size, vars, weight } from './vars.css';

export const center = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
});

export const modalClass = style([
  center,
  {
    width: '100%',
    alignItems: 'center',
    height: '98vh',
  },
]);

export const wrapperClass = style([
  center,
  {
    fontFamily: vars.vars.fontFamily,
    background: colors.white,
    boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.12)',
    alignItems: 'center',
    minWidth: 320,
    width: 320,
    padding: `${gap.larger}px ${gap.large}px`,
  },
]);

export const sectionClass = style([
  center,
  {
    width: '100%',
    padding: `0 ${gap.large}px`,
  },
]);

export const unstyledList = style([
  center,
  {
    listStyle: 'none',
    padding: `0 ${gap.larger}px`,
  },
]);

export const flexBox = style({
  gap: '10px',
  display: 'flex',
  textAlign: 'left',
});

export const figureClass = style([
  center,
  {
    margin: '1px',
  },
]);

export const titleClass = style({
  color: vars.vars.titleColor,
  fontWeight: weight.boldest,
});

export const cardDesc = style({
  color: vars.vars.titleDesc,
  marginLeft: gap.medium,
  fontSize: size.medium,
});

export const mainTitle = style([
  titleClass,
  {
    fontSize: size.big,
    lineHeight: size.large,
    fontStyle: 'normal',
  },
]);

export const featureDesc = style({
  color: vars.vars.featureDesc,
  marginLeft: gap.medium,
});

export const featureTitle = style([
  titleClass,
  {
    fontSize: size.medium,
    lineHeight: size.bigger,
  },
]);

export const progressText = style({
  color: colors.red,
  fontWeight: weight.boldest,
  fontSize: size.small,
  lineHeight: size.normal,
});

export const currentUsageClass = style([
  titleClass,
  {
    fontSize: size.medium,
    lineHeight: size.bigger,
  },
]);

export const progressBlockClass = style([
  center,
  {
    padding: `0 ${gap.large}px`,
  },
]);

export const progressBarClass = style({
  height: gap.medium,
  marginTop: gap.medium,
  backgroundColor: colors.gray,
  boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.12)',
  borderRadius: '8px',
  overflow: 'hidden',
  flexGrow: 1,
});

export const progressClass = style({
  height: '100%',
  backgroundColor: vars.vars.progressBarColor,
  borderRadius: '8px',
  // WebkitTransition: 'width 500ms linear',
  // MozTransition: 'width 500ms linear',
  // OTransition: 'width 500ms linear',
  transition: 'width 500ms linear',
});

export const buttonClass = style({
  backgroundColor: colors.red,
  marginTop: gap.large,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  order: 1,
  color: colors.white,
  padding: '11px 16px',
  cursor: 'pointer',
  border: 'none',
  fontFamily: vars.vars.fontFamily,
  fontWeight: weight.boldest,
  // WebkitTransition: 'all 200ms ease',
  // MozTransition: 'all 200ms ease',
  // OTransition: 'all 200ms ease',
  transition: 'all 200ms ease',
  ':hover': {
    backgroundColor: vars.vars.buttonHoverBg,
  },
  ':active': {
    backgroundColor: vars.vars.buttonActiveBg,
  },
  ':disabled': {
    opacity: 0.4,
  },
});
