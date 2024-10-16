import React, { useState, useContext } from 'react';

const LangContext = React.createContext();
const ThemeContext = React.createContext();

const App = () => {
  const [state, setState] = useState();
  return (
    <langContent.Provider value={{ theme, setTheme }}>
    </langContent.Provider>
  );
};

function changeElementLang(key, {
  nestedKey = null, variableValue = null
} = {}) {
  var value = langContent[key];
  if (nestedKey) {
    value = value[nestedKey];
  }
  if (variableValue) {
    value = value.replace(/\$\{(.*?)\}/g, (_, variable) => {
      const keys = variable.split('.');
      return keys.reduce((acc, key) => acc && acc[key], {
        variableValue
      });
    });
  }
  return value;
}

// Render the App component to the root div
ReactDOM.createRoot(document.getElementById('root')).render(<App />);