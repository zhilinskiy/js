//importing react code
import React from 'react';
import ReactDOM from 'react-dom/client';
//importing Section component
import Section from "./Section";
//named import / import by name
import {NAME, importantFunction} from "./consts";
//import export default: react class component
import Counter from "./Counter";

//React root element
const root = ReactDOM.createRoot(
    document.getElementById('root')
);

/**** Rendering Elements *****/
// //React elements
// const h1 = React.createElement('h1', {}, 'Hello, world!');
// const div = React.createElement('div', {}, h1);
// //render React element inside root element
// root.render(div);

/**** Rendering JSX *****/
// const name = 'Ira';
// //React elements
// const div = (
//     <div>
//         <h1>Hello JSX to {name}</h1>
//         <h1>use JavaScript expression inside JSX in curly braces</h1>
//         <p>2 + 2 = {2 + 2}</p>
//         <p className="some-class">use quotes to specify string literals as attributes</p>
//         <p className="some-class">use camelCase property naming</p>
//         <p className={true ? 'some-class' : 'other-class'}>use curly braces to embed a JavaScript expression in an
//             attribute</p>
//         <p className={true ? 'some-class' : 'other-class'}>Don’t put quotes around curly braces when embedding a
//             JavaScript expression in an attribute.</p>
//     </div>
// );// () groups elements together, !!! only one root element allowed !!!
// //render React element inside root element
// root.render(div);

/**** Rendering Functions *****/
//render React element inside root element
// root.render(Section({greet: 'Hey from function props as arguments'}));
// root.render(<Section greet="Hey from component props as attributes"/>);
// function Section(props) {
//     const user = 'Ira';
//     const today = new Date();
//     let counter = 0;
//     const clicker = () => console.log('Click');
//
//     return (
//         <section>
//             <div>
//                 <h1>Hello, {user}</h1>
//                 <p>Today is {today.toDateString()}</p>
//                 <p onClick={clicker}>Click me. My count is {counter}</p>
//                 <p>{props.greet}</p>
//             </div>
//         </section>
//     );
// }

/**** Rendering Functions from another file *****/
//render React element inside root element
// root.render(<Section greet="Hey from another file"/>);

/**** Rendering + ES modules *****/
// root.render(<Section greet={importantFunction() + ' ' + NAME}/>);

/**** Rendering Class component *****/
root.render(<Counter/>);