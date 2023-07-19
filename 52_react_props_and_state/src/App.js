import React from "react";
import Greeting from "./components/Greeting";
import userData from "./components/Greeting/userData";

class App extends React.Component {
    // render() {
    //     return (
    //         <div>
    //             <Greeting userName='Ira'/>
    //             <Greeting userName='Dima'/>
    //             <Greeting userName='Vova'/>
    //         </div>
    //     );
    // }

    //dynamic rendering
    // userNames = ['Ira', 'Dima', 'Vova']
    // render() {
    //     return (
    //         <div>
    //             {this.userNames.map(
    //                 (name) => <Greeting userName={name}/>
    //             )}
    //         </div>
    //     );
    // }

    //dynamic rendering 2
    // userNamesProvider = () => ['Ira', 'Dima', 'Vova'].map(
    //     (name) => <Greeting userName={name}/>
    // );
    // render() {
    //     return (
    //         <div>
    //             {this.userNamesProvider()}
    //         </div>
    //     );
    // }

    //dynamic rendering 3: sorting and keys
    // constructor(props, context) {
    //     super(props, context);
    //     this.state = {
    //         isSort: true,
    //         users: ['Ira', 'Dima', 'Vova']
    //     }
    // }
    // userNamesProvider = () => this.state.users.map(
    //     (name) => <Greeting userName={name} key={name}/>
    // );
    // sortUsers = () => {
    //     const newUsers = [...this.state.users];//copy array because state immutable
    //     newUsers.sort((a, b) => {
    //         if (this.state.isSort) {
    //             return a > b ? 1 : -1  //sorting by alphabet
    //         }
    //         return a > b ? -1 : 1//sorting opposite side
    //     }); //sorting by alphabet
    //     this.setState({
    //         isSort: !this.state.isSort,
    //         users: newUsers
    //     });
    // }
    //
    // render() {
    //     return (
    //         <div>
    //             <button onClick={this.sortUsers}>Sorted</button>
    //             {this.userNamesProvider()}
    //         </div>
    //     );
    // }

    //dynamic rendering 4: sorting and keys
    constructor(props, context) {
        super(props, context);
        this.state = {
            isSort: true,
            users: userData
        }
    }

    userNamesProvider = () => this.state.users.map(
        (user) => <Greeting userName={user.name} key={user.id}/>
    );
    sortUsers = () => {
        const newUsers = [...this.state.users];//copy array because state immutable
        newUsers.sort((a, b) => {
            if (this.state.isSort) {
                return a.name > b.name ? 1 : -1  //sorting by alphabet
            }
            return a.name > b.name ? -1 : 1//sorting opposite side
        }); //sorting by alphabet
        this.setState({
            isSort: !this.state.isSort,
            users: newUsers
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.sortUsers}>Sorted</button>
                {this.userNamesProvider()}
            </div>
        );
    }
}

export default App;