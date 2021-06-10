import React from "react";
import * as axios from 'axios'
import {ListGroup} from "react-bootstrap";

export class Ex6 extends React.Component {
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => this.props.setUsers(response.data))
    }

    render() {
        return (
            <div>
                <h5>Список пользаков</h5>
                <ListGroup>
                    {this.props.users.map((user) => (
                    <ListGroup.Item key={user.id}>{user.name}</ListGroup.Item>
                    ))}
                </ListGroup>
                {

            }</div>
        )
    }
}
