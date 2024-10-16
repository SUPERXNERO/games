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

// Render the App component to the root div
ReactDOM.createRoot(document.getElementById('root')).render(<App />);