import React, {Component} from 'react';

class Tree extends Component {

    constructor(props, context) {
        console.log('method constructor');
        super(props, context);
        this.state = {
            someState: true
        }
    }

    componentDidMount() {
        console.log('method componentDidMount');
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('method shouldComponentUpdate');
        return true;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('method componentDidUpdate');
    }
    componentWillUnmount() {
        console.log('method componentDidUpdate');
    }

    render() {
        console.log('method render');
        return (
            <div>
                <button
                    onClick={()=>this.setState({someState: !this.state.someState})}>
                    Change state
                </button>
                <h2>I am Tree. My state is {this.state.someState ? 'TRUE': 'FALSE'}</h2>
            </div>
        );
    }
}

export default Tree;