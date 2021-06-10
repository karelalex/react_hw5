import React from "react";
import {Card} from "react-bootstrap";
export class Ex8 extends React.Component{
    constructor(props) {
        super(props);

        this.state = {}

        console.log('constructor')
    }
    componentDidMount() {
        console.log('component did mount')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('get derived state from props')
        return null
    }

    render() {
        console.log('render')
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Ненативный реакт</Card.Title>
                    <Card.Text>
                        Изучаем жизненный цикл реакта по видео скучных дядек
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}
