import React from "react";

//you have to extend React.Component
class Counter extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            count: 1
        };
        //this binding
        //this.increment = this.increment.bind(this);
    }
    increment() {
        //NO!!!!! STATE IMMUTABLE
        // this.state.count++
        // this.state.count = this.state.count + 1
        //YES
        this.setState({
            count: this.state.count + 1
        })
    }
//this binding with () => arrow function
//     increment = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     };

    //this binding / context with () => arrow function
    render() {
        return (
            <div>
                <h1>Class component</h1>
                <p>I have lifecycle hooks!!!</p>
                <p>I have a STATE !!!</p>
                <p>my counter(state) is {this.state.count}</p>
                <button onClick={() => this.increment()}>+</button>
                <button>-</button>
            </div>
        );
    }
}

export default Counter;