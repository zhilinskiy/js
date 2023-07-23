import React from "react";
import Tree from "./components/Tree";
import Timer from "./components/Timer";
import Clock from "./components/Clock";
import StopWatch from "./components/StopWatch";

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            hasTree: false
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => this.setState({hasTree: !this.state.hasTree})}>
                    {this.state.hasTree ? 'Remove tree' : 'Add tree'}
                </button>
                {this.state.hasTree ? <Tree/> : <div>Tree removed</div>}
                <h2>Clock</h2>
                <Clock/>
                <h2>Timer</h2>
                <Timer/>
                <StopWatch/>
            </div>
        );
    }
}

export default App;