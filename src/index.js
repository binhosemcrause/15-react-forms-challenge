import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './styles.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Challenge (App.jsx):
// 1. Use a React form to add functionality to an input field and button.
// 2. Capture the user input when the button is clicked.
// 3. Display the user input in an <h1> element, for example: "Hello John".