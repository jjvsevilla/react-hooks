import React from 'react'
import AngularLogo from '../logos/angular-logo.svg';
import ReactLogo from '../logos/react-logo.svg';
import JsLogo from '../logos/js-logo.svg';

export default function Logo({ name, width = '200' }) {
  let svgLogo;
  switch (name) {
    case 'angular':
      svgLogo = AngularLogo;
      break;
    case 'react':
      svgLogo = ReactLogo;
      break;
    default:
      svgLogo = JsLogo
  }

  return (
    <div className="app-logo">
        <img src={svgLogo} alt="logo" width={width} />
    </div>
  )
}