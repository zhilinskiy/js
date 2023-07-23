//importing react code
import React from 'react';
import ReactDOM from 'react-dom/client';
//import export default: react class component
import App from "./App";

//React root element
const root = ReactDOM.createRoot(
    document.getElementById('root')
);

/**** Rendering Main Class component *****/
root.render(<App/>);