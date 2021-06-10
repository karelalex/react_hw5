import React from "react";

const ErrorComponent = (props) => <div>{props.ignore.her}</div>

export class Ex3 extends React.Component {
    constructor(props) {
        console.log('constructor')
        super(props);
        this.state = {
            counter: 0
        }
        this.increment = () => this.setState({counter: this.state.counter + 1})
        this.decrement = () => this.setState({counter: this.state.counter - 1})
    }

    static getDerivedStateFromProps(props, state) {
        if (props.seed && state.seed !== props.seed) {
            return{
                seed: props.seed,
                counter: props.seed
            }
        }
        return null
}

    componentDidMount() {
        console.log('Component did mount');
        console.log('----------------------')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Component did update');
        console.log('----------------------')
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('get snapshot')
        return null
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('Should component update')
        if (nextProps.ignoreProp && this.props.ignoreProp !== nextProps.ignoreProp) {
            console.log('Should component update - NO RENDER')
            return false
        }
        console.log('Should component update - Render')
        return true
    }

    componentWillUnmount() {
        console.log('Component will unmount');
        console.log('----------------------');
    }

    componentDidCatch(error, errorInfo) {
        console.log('Error catched')
        this.setState({error, errorInfo})
    }

    render() {
        console.log('render')

        if (this.props.showErrorComponent && this.state.error) {
            return <div>We have ERROR</div>
        }
        return (
            <div>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.increment}>Increment</button>
                <h1>Counter: {this.state.counter}</h1>
                {this.props.showErrorComponent && <ErrorComponent />}
            </div>
        )
    }
}
