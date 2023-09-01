import React from 'react'

const Person = (props) => {
    return (
        <div>
            <h2>{props.user.firstName} {props.user.lastName}</h2>
            <p>Age: {props.user.age}</p>
            <p>Hair Color: {props.user.hairColor}</p>
        </div>
    )
}

export default Person