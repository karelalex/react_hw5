import React from "react";
import * as axios from 'axios'
import {ListGroup} from "react-bootstrap";

export class Ex6 extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => this.props.setUsers(response.data.items))
    }

    render() {
        console.log(this.props.users)
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
