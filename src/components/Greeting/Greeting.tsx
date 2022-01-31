import React from 'react';
import './Greeting.scss';

/**
 * Greeting message with type simulation
 */
export default function Greeting() {
  return (
    <div className='Greeting'>
      <div className='Greeting-text typewriter'>
        Find your inspiration. 
      </div>
    </div>
  );
}