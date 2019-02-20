import React from 'react';

export const themes = {
  react: {
    color: 'blue'
  },
  angular: {
    color: 'red'
  }
};


export const ThemeContext = React.createContext(themes.react);

export const LocaleContext = React.createContext('english');