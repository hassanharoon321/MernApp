import React from 'react'
import { useParams } from 'react-router-dom'
import PlaceList from '../Components/PlaceList'

function UserPlaces() {
    const dummyPlaces = [
        {
            id: "p1",
            title: "Empire State Building",
            description: "Mai nh likh rha ho",
            imageUrl: "https://images.unsplash.com/photo-1555109307-f7d9da25c244?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZW1waXJlJTIwc3RhdGUlMjBidWlsZGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
            address: "ye bh mai nh likh rha ho",
            location: {
                lat: 40.2938493,
                lng: -73.2842093
            },
            craetor:"u1"
        },
        {
            id: "p2",
            title: "Empire State Building",
            description: "Mai nh likh rha ho",
            imageUrl: "https://images.unsplash.com/photo-1555109307-f7d9da25c244?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZW1waXJlJTIwc3RhdGUlMjBidWlsZGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
            address: "ye bh mai nh likh rha ho",
            location: {
                lat: 40.2938493,
                lng: -73.2842093
            },
            craetor:"u1"
        },
        {
            id: "p3",
            title: "Empire State Building",
            description: "Mai nh likh rha ho",
            imageUrl: "https://images.unsplash.com/photo-1555109307-f7d9da25c244?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZW1waXJlJTIwc3RhdGUlMjBidWlsZGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
            address: "ye bh mai nh likh rha ho",
            location: {
                lat: 40.2938493,
                lng: -73.2842093
            },
            craetor:"u2"
        }
    ]
    const userId = useParams().userId;
    console.log("userId",userId);
    const loadedPlaces = dummyPlaces.filter(place=>place.craetor === userId)
    console.log("loadedPlaces",loadedPlaces);
    return (

        <div>
            <PlaceList items={loadedPlaces}/>
        </div>
    )
}

export default UserPlaces
