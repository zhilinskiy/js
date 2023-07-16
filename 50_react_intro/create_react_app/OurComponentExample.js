// Function Components  - react component example. Takes props, returns react element
//
function OurComponent(props) {
    return (<h1>React is my bread and butter {props.day}!</h1>)
}
// return function for reuse in other files
export default OurComponent;

// Class Component example
// import React from "react";
// class Welcome extends React.Component {
//     render() {
//         return <h1>Hello, {this.props.name}</h1>;
//     }
// }