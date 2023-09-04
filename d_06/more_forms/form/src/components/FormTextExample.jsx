import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';

const FormTextExample = (props) => {

    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [LastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [EmailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [PasswordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const handleFirstName = (e) => {
        setFirstName(e.target.value)
        if (e.target.value.length < 2) {
            setFirstNameError("FirstName too short")
        }
        else {
            setFirstNameError("")
        }
    }
    const handleLastName = (e) => {
        setLastName(e.target.value)
        if (e.target.value.length < 2) {
            setLastNameError("LastName too short")
        }
        else {
            setLastNameError("")
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
        if (e.target.value.length < 2) {
            setEmailError("Email too short")
        }
        else {
            setEmailError("")
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 8) {
            setPasswordError("Password too short")
        }
        else {
            setPasswordError("")
        }
    }

    return (
        <>
            <Form.Label htmlFor="inputFirstName5">FirstName :</Form.Label>
            <Form.Control
                type="text" onChange={(e) => { handleFirstName(e) }}
                value={firstName}
            />
            <p>{firstNameError} </p>
            <Form.Label htmlFor="inputLastName5">LastName :</Form.Label>
            <Form.Control
                type="text" onChange={(e) => handleLastName(e)}
                value={lastName}
            />
            <p>{LastNameError}</p>
            <Form.Label htmlFor="inputPassword5">Email :</Form.Label>
            <Form.Control
                type="email" onChange={(e) => handleEmail(e)}
                value={email}
            />
            <p>{EmailError}</p>
            <Form.Label htmlFor="inputPassword5">Password :</Form.Label>
            <Form.Control
                type="password" onChange={(e) => handlePassword(e)}
                value={password}
            />
            <p>{PasswordError}</p>
            <Form.Label htmlFor="inputPassword5">ConfirmPassword :</Form.Label>
            <Form.Control
                type="password" onChange={(e) => setConfirmPassword(e.target.value)}
            />
        </>
    );
}
export default FormTextExample