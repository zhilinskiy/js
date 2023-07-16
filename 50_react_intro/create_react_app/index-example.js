//adds react code to current file
import React from 'react';
import ReactDOM from 'react-dom/client';
// import OurComponent for using here
// import OurComponent from "./OurComponent";

//creates react root element
const root = ReactDOM.createRoot(document.getElementById('root'));


const h2 = React.cloneElement('h2', {}, 'Hello react. Ira molodec');
//creates react element, same as React.createElement
// const h2 = <h2>Hello react. Ira molodec</h2>
//render react element in react root element
root.render(
    h2
);


// //const h2 = React.cloneElement('h2', {}, 'Hello react. Ira molodec');
// //creates react element, same as React.createElement
// // () group JSX elements
// const article = (
//     <article>
//         <h2>Hello react JSX</h2>
//         <p>lorem ipsum</p>
//     </article>
// );
// //render react element in react root element
// root.render(
//     article
// );


// const module = React.createElement(createComponent, {day: "Today"});
// //render react element in react root element
// root.render(
//     module
// );
//
// // react component example. Takes props, returns react element
// function createComponent(props) {
//     return <h1>React is my bread and butter {props.day}!</h1>
// }


// //render react element in react root element
// root.render(
//     //Root component should be only one - div
//     <div>
//         <OurComponent day="yesterday"/>
//         <OurComponent day="today"/>
//         <OurComponent day="tomorow"/>
//     </div>
// );
//
// // react component example. Takes props, returns react element
// function OurComponent(props) {
//     return (<h1>React is my bread and butter {props.day}!</h1>)
// }

//render react element in react root element
// root.render(
//     //Root component should be only one - div
//     <div>
//         <OurComponent day="yesterday"/>
//         <OurComponent day="today"/>
//         <OurComponent day="tomorow"/>
//     </div>
// );
