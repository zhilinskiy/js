import React, {Component} from 'react';

class StopWatch extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            seconds: 0,
            minutes: 0,
            hours: 0,
        }
        this.timerID = undefined;
    }

    componentWillUnmount() {
        this.stop();
    }

    start = () => {
        this.timerID = setInterval(
            () => {
                let {seconds, minutes, hours} = this.state;
                seconds = seconds + 1;
                if (seconds > 60) {
                    seconds = 0;
                    minutes = minutes + 1;
                }
                if (minutes > 60) {
                    minutes = 0;
                    hours = hours + 1;
                }
                this.setState({
                    seconds: seconds,
                    minutes: minutes,
                    hours: hours,
                });
            },
            1000
        );
    }
    stop = () => {
        if (this.timerID) {
            clearInterval(this.timerID);
            this.timerID = undefined;
        }
    }
    reset = () => {
        this.setState({
            seconds: 0,
            minutes: 0,
            hours: 0,
        });
    }

    time = () => {
        let {seconds, minutes, hours} = this.state;
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        if (hours < 10) {
            hours = '0' + hours;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        return `${hours} : ${minutes} : ${seconds}`
    }

    render() {
        return (
            <div>
                <h2>StopWatch {this.timerID ? 'RUNNING' : 'STOPPED'}</h2>
                <h3>{this.time()}</h3>
                <p>
                    <button onClick={this.start}>Start</button>
                    <button onClick={this.stop}>Stop</button>
                    <button onClick={this.reset}>Reset</button>
                </p>
            </div>
        );
    }
}

export default StopWatch;