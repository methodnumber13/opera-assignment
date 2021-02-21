import React from 'react';
import { Spinner as BootstrapSpinner } from 'react-bootstrap';

export const Spinner = ({ text = 'Loading...' }) => (
  <BootstrapSpinner animation="border" role="status">
    <span className="sr-only">{text}</span>
  </BootstrapSpinner>
);
