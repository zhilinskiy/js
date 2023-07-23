import React, {Component} from 'react';

class Timer extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            count: 0
        }
        this.timerID = undefined;
    }

    timer;

    componentDidMount() {
        this.start();
    }
    componentWillUnmount() {
        this.stop();
    }

    start = () => {
        if (this.timerID) {
            this.stop();
        }
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    tick = () => {
        const {count} = this.state;
        this.setState({
            count: count + 1
        });
    }
    stop = () => {
        clearInterval(this.timerID);
        this.timerID = undefined;
    }

    render() {
        return (
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={this.start}>Start Timer</button>
                <button onClick={this.stop}>Stop Timer</button>
            </div>
        );
    }
}

export default Timer;