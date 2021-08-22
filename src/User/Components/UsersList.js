import React from 'react'

import Card from '../../Shared/Components/UiElements/Card'
import UsersItem from './UsersItem'
import "./UsersList.css"

function UsersList(props) {
    if (props.items.length === 0) {
        return (
            <div className="center">
                <Card>
                    <h2>No users found</h2>
                </Card>
            </div>)
    }
    return (
        <ul className="users-list">
            {props.items.map((user) =>
                <UsersItem key={user.id}
                    id={user.id}
                    image={user.image}
                    name={user.name}
                    placeCount={user.places}
                />)}
        </ul>
    )
}

export default UsersList
