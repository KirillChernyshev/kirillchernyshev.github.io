import React from 'react';
import './ErrorMessage.scss';
import { IErrorMessageProps } from './IErrorMessageProps';

/**
 * Component for showing error message
 */
export default function ErrorMessage({message}: IErrorMessageProps) {
  return (
    <div className='ErrorMessage'>
      <div>Something went wrong. Please try again after some time.</div>
      <div>{message ? `Error: ${message}` : ''}</div>
    </div>
  );
}