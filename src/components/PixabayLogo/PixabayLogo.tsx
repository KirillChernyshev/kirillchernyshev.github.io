import React from 'react';
import './PixabayLogo.scss';

/**
 * Logo of pixabay.com. It's required if you make use of the Pixabay API.
 */
export default function PixabayLogo() {
  return (
    <div className='PixabayLogo'>
      <span className='PixabayLogo--text'>Powered by </span>
      <a href="https://pixabay.com/">
        <i>
          <img
            alt="pixabay.com logo"
            height="18px"
            src="https://pixabay.com/static/img/logo.svg"
            width="94px"
          />
        </i>
        <span>Free Images</span>
      </a>
    </div>
  );
}