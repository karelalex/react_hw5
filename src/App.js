import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {Ex6} from "./Ex6";

class App extends React.Component {
    state = {
        users: []
    }

    setUsers = (users) => this.setState({
        users
    })
    render() {
        return (
            <div className="container">
                <Ex6 users={this.state.users} setUsers={this.setUsers} />
            </div>
        );
    }
}

export default App;
