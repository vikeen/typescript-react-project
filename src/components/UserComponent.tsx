import * as React from "react";
import UserInterface from '../UserInterface'

const UserComponent = (props: UserInterface) => {
    const { name, age, address, dob } = props
    return (
        <div>
            <h1>User Component</h1>
            Hello, <b>{name}</b>
            <br />
            You are <b>{age} years old</b>
            <br />
            You live at: <b>{address}</b>
            <br />
            You were born: <b>{dob.toDateString()}</b>
        </div>
    );
}

export default UserComponent