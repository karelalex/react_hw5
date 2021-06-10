import React from "react";
import {Button} from "react-bootstrap";

export class Ex7 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            class: 'primary',
            label: 'Жми'
        }
        console.log('constructor')
    }

    componentDidMount() {
        console.log('component did mount')
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('should component update')
        return true
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('component did update')
    }

    buttonHandler = () => {
        const className = (this.state.class === 'primary') ? 'secondary' : 'primary'
        this.setState((state) => ({
            class: className
        }))
    }


    render() {
        console.log('render')
        return (
            <div>
                <div>
                    <Button onClick={this.buttonHandler} variant={this.state.class}>Жми</Button>
                </div>
            </div>
        )
    }
}
