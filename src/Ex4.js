import React from "react";
import './ex4.css'

export class Ex4 extends React.Component {
    constructor(props) {
        super(props);
        const date = new Date()
        this.state = {
            seconds: date.getSeconds(),
            minutes: date.getMinutes(),
            hours: date.getHours()
        }
    }

    tick = () => {
        const date = new Date()
        this.setState({
            seconds: date.getSeconds(),
            minutes: date.getMinutes(),
            hours: date.getHours()
        })
    }

    componentDidMount() {
        this.timer = setInterval(this.tick, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    render() {
        const {seconds, minutes, hours} = this.state

        const s = seconds * 6
        const m = minutes * 6 + 6 * seconds / 60
        const h = hours % 12 * 30 + 5 * minutes / 60
        console.log(s, m, h)

        return (
            <div className="clock">
                <div className="clock__seconds" style={{transform: 'rotate(' + s + 'deg)'}} />
                <div className="clock__minutes" style={{transform: 'rotate(' + m + 'deg)'}} />
                <div className="clock__hours" style={{transform: 'rotate(' + h + 'deg)'}} />
            </div>
        )
    }
}
