//importing react code
import React from 'react';
import ReactDOM from 'react-dom/client';
//import export default: react class component
//import Greeting from "./components/Greeting";
import App from "./App";

//React root element
const root = ReactDOM.createRoot(
    document.getElementById('root')
);

/**** Rendering Class component *****/
// root.render(React.createElement(Greeting, {userName: 'Ira'}));
// root.render(<Greeting userName='Ira'/>);
// root.render(
//     <div>
//         <Greeting userName='Ira'/>
//         <Greeting userName='Dima'/>
//         <Greeting userName='Vova'/>
//     </div>
// );

/**** Rendering Main Class component *****/
root.render(<App/>);