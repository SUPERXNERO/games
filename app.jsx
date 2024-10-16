// Simple React component
const App = () => {
  return (
    <div>
      <h1>Hello, React from an external file!</h1>
      <p>
        This is a React component loaded from a separate JSX file.
    </p>
    </div>
  );
};

function changeContentLang(key, {
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
  elements.forEach((element)=>element.textContent = value);
}

// Render the App component to the root div
ReactDOM.createRoot(document.getElementById('root')).render(<App />);