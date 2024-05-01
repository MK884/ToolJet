import React from 'react';

const Eye1 = ({ style, fill = '#C1C8CD', width = '25', className = '', viewBox = '0 0 25 25' }) => (
  <svg
    width={width}
    height={width}
    viewBox={viewBox}
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.25 3.53894C13.25 3.12473 12.9142 2.78894 12.5 2.78894C12.0858 2.78894 11.75 3.12473 11.75 3.53894V5.53894C11.75 5.95315 12.0858 6.28894 12.5 6.28894C12.9142 6.28894 13.25 5.95315 13.25 5.53894V3.53894ZM4.03033 6.00861C3.73744 5.71572 3.26256 5.71572 2.96967 6.00861C2.67678 6.3015 2.67678 6.77638 2.96967 7.06927L4.46967 8.56927C4.76256 8.86216 5.23744 8.86216 5.53033 8.56927C5.82322 8.27638 5.82322 7.8015 5.53033 7.50861L4.03033 6.00861ZM22.0303 7.06927C22.3232 6.77638 22.3232 6.3015 22.0303 6.00861C21.7374 5.71572 21.2626 5.71572 20.9697 6.00861L19.4697 7.50861C19.1768 7.8015 19.1768 8.27638 19.4697 8.56927C19.7626 8.86216 20.2374 8.86216 20.5303 8.56927L22.0303 7.06927ZM21.3772 13.1102C22.8743 14.5433 22.8743 17.0349 21.3772 18.4679C19.3134 20.4436 16.1042 22.7891 12.5 22.7891C8.8958 22.7891 5.68661 20.4436 3.62281 18.4679C2.12573 17.0349 2.12573 14.5433 3.62281 13.1102C5.68661 11.1346 8.8958 8.78906 12.5 8.78906C16.1042 8.78906 19.3134 11.1346 21.3772 13.1102ZM15.5 15.7891C15.5 17.4459 14.1568 18.7891 12.5 18.7891C10.8431 18.7891 9.49997 17.4459 9.49997 15.7891C9.49997 14.1322 10.8431 12.7891 12.5 12.7891C14.1568 12.7891 15.5 14.1322 15.5 15.7891Z"
      fill={fill}
    />
  </svg>
);

export default Eye1;
