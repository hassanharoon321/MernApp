import React from 'react'
import UsersList from '../Components/UsersList'

function Users() {
    const USERS = [
        {
            id: "u1",
            name: "Hassan Haroon",
            image: "https://media-exp1.licdn.com/dms/image/C5603AQEUoNaCxGdRsA/profile-displayphoto-shrink_200_200/0/1565136033018?e=1634774400&v=beta&t=shhL1IUwSORi1USqeYwopiw1XPj2wAW3T3K1wb1ixWg",
            places: 3
        },
        {
            id: "u2",
            name: "Hassan Haroon",
            image: "https://media-exp1.licdn.com/dms/image/C5603AQEUoNaCxGdRsA/profile-displayphoto-shrink_200_200/0/1565136033018?e=1634774400&v=beta&t=shhL1IUwSORi1USqeYwopiw1XPj2wAW3T3K1wb1ixWg",
            places: 3
        },
        {
            id: "u2",
            name: "Haroon Khan",
            image: "https://media-exp1.licdn.com/dms/image/C5603AQEUoNaCxGdRsA/profile-displayphoto-shrink_200_200/0/1565136033018?e=1634774400&v=beta&t=shhL1IUwSORi1USqeYwopiw1XPj2wAW3T3K1wb1ixWg",
            places: 3
        },
    ]
    return (
        <div>
            <UsersList items={USERS} />
        </div>
    )
}

export default Users
