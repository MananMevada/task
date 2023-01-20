import React from 'react';
import logo from '../../assets/images/file.png';

function NotFound () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <p>
        Page not found.
        </p>
      </header>
    </div>
  );
}

export default NotFound;
