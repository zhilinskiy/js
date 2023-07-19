import React from "react";
import './style.css';

class Greeting extends React.Component {

    // if you do not need custom state constructor can be omitted
    constructor(props, context) {
        super(props, context);
        this.state = {
            isGreeting: true
        }
    }

    changeGreeting = () => {
        this.setState({
            isGreeting: !this.state.isGreeting
        })
    }

    render() {
        const greetingText = this.state.isGreeting ? 'Hey' : 'Bye';
        return (
            <div className="greeting">
                <h2 onClick={this.changeGreeting}>
                    {greetingText}, {this.props.userName}! I'm React ;)
                </h2>
            </div>
        );
    }
}

export default Greeting;