import './App.css';
import React from "react";
import {Ex3} from "./Ex3";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mount: true,
            ignoreProp: 0,
            seed: 40,
            showErrorComponent: false
        }
        this.mountCounter = () => this.setState({mount: true})
        this.unmountCounter = () => this.setState({mount: false})
        this.ignoreProp = () => this.setState({ignoreProp: Math.random()})
        this.seedGenerator = () => this.setState({seed: Number.parseInt(Math.random() * 100)})
        this.toggleError = () => this.setState({showErrorComponent: !this.state.showErrorComponent})
    }
    render() {
        return (
            <div className="App">
                <button onClick={this.mountCounter} disabled={this.state.mount}>Mount Counter</button>
                <button onClick={this.unmountCounter} disabled={!this.state.mount}>Unomount Counter</button>
                <button onClick={this.ignoreProp}>Ignore Prop</button>
                <button onClick={this.seedGenerator}>Generate Seed</button>
                <button onClick={this.toggleError}>Toggle error</button>
                {this.state.mount ?
                    <Ex3
                        ignoreProp={this.state.ignoreProp}
                        seed={this.state.seed}
                        showErrorComponent={this.state.showErrorComponent}
                    />
                    : null}
            </div>
        );
    }
}

export default App;
