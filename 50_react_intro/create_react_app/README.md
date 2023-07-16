- cd `50_react_intro/react_cdn`
- `npx create-react-app my-app`
- `npx create-react-app .` create project in current directory
- `cd my-app`
- `npm start` run app
- add to `50_react_intro/create_react_app/my-app/src/index.js`
```javascript
//adds react code to current file
import React from 'react';
import ReactDOM from 'react-dom/client';
//creates react root element
const root = ReactDOM.createRoot(document.getElementById('root'));
//const h2 = React.cloneElement('h2', {}, 'Hello react. Ira molodec');
//creates react element, same as React.createElement
const h2 = <h2>Hello react. Ira molodec</h2>
//render react element in react root element
root.render(
    h2
);
```
- update `50_react_intro/create_react_app/my-app/src/index.js`
```javascript
//adds react code to current file
import React from 'react';
import ReactDOM from 'react-dom/client';
//creates react root element
const root = ReactDOM.createRoot(document.getElementById('root'));
//const h2 = React.cloneElement('h2', {}, 'Hello react. Ira molodec');
//creates react element, same as React.createElement
// () group JSX elements
const article = (
    <article>
        <h2>Hello react JSX</h2>
        <p>lorem ipsum</p>
    </article>
);
//render react element in react root element
root.render(
    article
);
```
- update `50_react_intro/create_react_app/my-app/src/index.js`
```javascript
//adds react code to current file
import React from 'react';
import ReactDOM from 'react-dom/client';
//creates react root element
const root = ReactDOM.createRoot(document.getElementById('root'));
const module = React.createElement(createComponent, {day: "Today"});
//render react element in react root element
root.render(
    module
);

// react component example. Takes props, returns react element
function createComponent(props) {
    return <h1>React is my bread and butter {props.day}!</h1>
}
```
- update `50_react_intro/create_react_app/my-app/src/index.js`
```javascript
//adds react code to current file
import React from 'react';
import ReactDOM from 'react-dom/client';
//creates react root element
const root = ReactDOM.createRoot(document.getElementById('root'));

//render react element in react root element
root.render(
    //Root component should be only one - div
    <div>
        <OurComponent day="yesterday"/>
        <OurComponent day="today"/>
        <OurComponent day="tomorow"/>
    </div>
);

// react component example. Takes props, returns react element
function OurComponent(props) {
    return (<h1>React is my bread and butter {props.day}!</h1>)
}
```
- create OurComponent.js and add to it
```javascript
// react component example. Takes props, returns react element
function OurComponent(props) {
    return (<h1>React is my bread and butter {props.day}!</h1>)
}
// return function for reuse in other files
export default OurComponent;
```
- update `50_react_intro/create_react_app/my-app/src/index.js`
```javascript
//adds react code to current file
import React from 'react';
import ReactDOM from 'react-dom/client';
// import OurComponent for using here
import OurComponent from "./OurComponent";
//creates react root element
const root = ReactDOM.createRoot(document.getElementById('root'));

//render react element in react root element
root.render(
    //Root component should be only one - div
    <div>
        <OurComponent day="yesterday"/>
        <OurComponent day="today"/>
        <OurComponent day="tomorow"/>
    </div>
);
```