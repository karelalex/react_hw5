import React from "react";

export class Ex2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Текущее время',
            date: new Date(),
            counter: 0
        }
    }

    componentDidMount() {
        console.log('did mount')
        this.interval = setInterval(() => {
            this.setState((state) => ({
                date: new Date(),
                counter: state.counter + 1
            }))
        }, 1000)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('did update')
    }

    componentWillUnmount() {
        console.log('will unmount')
        clearInterval(this.interval)
    }

    render() {
        return(
            <div>
                <h4>{this.state.title}</h4>
                <p>{this.state.counter}</p>
                <p>{this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }
}
