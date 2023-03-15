import { createGlobalTheme } from '@vanilla-extract/css';
import { vars } from './vars.css';

export const globalTheme = createGlobalTheme(':root', vars);
