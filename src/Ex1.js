import React, {useEffect, useState} from "react";

export class Ex1Class extends React.Component {
    constructor(props) {
        console.log('constructor')
        console.log('init props', props)
        super(props);
        this.state = {
            counter: props.cuc
        }
    }
    buttonHandler = () => {
        console.log('button click')
        this.setState((state) => ({
            counter: state.counter + 1
        }))
    }

    static getDerivedStateFromProps(props, state) {
        console.log('get derived state from props')
        return ({
            counter: props.cuc
        })
    }

    componentDidMount() {
        console.log('component did mount')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('component did update')
    }

    render() {
        console.log('render1')
        return (
            <div>
                {console.log('render2')}
                <h3>Классовый компонент</h3>
                <div>
                    <button onClick={this.buttonHandler}>Жми</button>
                </div>
                <div>
                    {this.state.counter}
                </div>
            </div>
        )
    }
}

export const Ex1Func = (props) => {
    console.log('setState')
    const [counter, setCounter] = useState(props.cuc)
    const buttonHandler = () => {
        console.log('button click')
        setCounter(counter + 1)
    }

    useEffect( () => console.log('effect'))

    console.log('render1')
    return (
        <div>
            <h3>Функциональный компонент</h3>
            {console.log('render2')}
            <div>
                <button onClick={buttonHandler}>Жми</button>
            </div>
            <div>
                {counter}
            </div>
        </div>
    )
}
