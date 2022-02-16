import React from 'react';

function Button({ isDarkMode, onDarkModeClick }) {
  return (
    <header>
      <h2>Flatify</h2>
      <button onClick={onDarkModeClick}>
        {isDarkMode ? 'Dark' : 'Light'} Mode
      </button>
    </header>
  );
}

export default Button;
