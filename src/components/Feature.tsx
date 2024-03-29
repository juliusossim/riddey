import React from 'react';
import { flexBox, figureClass, featureDesc, featureTitle } from '../styles/card.css';
interface featureProp {
  index: number;
}
const Feature: React.FC<featureProp> = (prop: featureProp) => (
  <li className={flexBox}>
    <figure className={figureClass}>
      <svg
        width='22'
        height='23'
        viewBox='0 0 22 23'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle
          cx='11'
          cy='11'
          r='10.5'
          transform='matrix(-1 0 0 1 22 0.5)'
          fill='white'
          stroke='#D8D9D9'
        />
        <path
          d='M14.914 8.70583C14.8598 8.65115 14.7953 8.60776 14.7242 8.57814C14.6531 8.54853 14.5769 8.53328 14.4999 8.53328C14.4229 8.53328 14.3466 8.54853 14.2755 8.57814C14.2044 8.60776 14.1399 8.65115 14.0857 8.70583L9.73987 13.0575L7.91404 11.2258C7.85773 11.1714 7.79127 11.1287 7.71843 11.1C7.6456 11.0713 7.56783 11.0572 7.48956 11.0585C7.41128 11.0599 7.33405 11.0767 7.26225 11.1079C7.19045 11.1391 7.12551 11.1841 7.07112 11.2404C7.01673 11.2967 6.97396 11.3632 6.94526 11.436C6.91656 11.5088 6.90248 11.5866 6.90384 11.6649C6.90519 11.7432 6.92195 11.8204 6.95315 11.8922C6.98436 11.964 7.0294 12.0289 7.0857 12.0833L9.3257 14.3233C9.37993 14.378 9.44445 14.4214 9.51553 14.451C9.58662 14.4806 9.66286 14.4959 9.73987 14.4959C9.81688 14.4959 9.89312 14.4806 9.96421 14.451C10.0353 14.4214 10.0998 14.378 10.154 14.3233L14.914 9.56333C14.9732 9.5087 15.0205 9.44241 15.0528 9.36862C15.0851 9.29482 15.1018 9.21514 15.1018 9.13458C15.1018 9.05402 15.0851 8.97433 15.0528 8.90054C15.0205 8.82675 14.9732 8.76045 14.914 8.70583V8.70583Z'
          fill='#E26559'
        />
      </svg>
    </figure>
    <p>
      <span className={featureTitle}>{`Feature #${prop.index}`}</span>
      <span className={featureDesc}>-Etiam convallis, nibh vitae dui risus</span>
    </p>
  </li>
);
export default Feature;
