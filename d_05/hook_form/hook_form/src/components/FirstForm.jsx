import React, { useState } from 'react'

const FirstForm = () => {
    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    return (
        <fieldset>
            <legend>
                <h2>FirstForm</h2>
            </legend>


            <form>
                <p>First Name: <input type="text" onChange={(e) => setFirstName(e.target.value)} /></p>
                <p>Last Name: <input type="text" onChange={(e) => setLastName(e.target.value)} /></p>
                <p>Email: <input type="email" onChange={(e) => setEmail(e.target.value)} /></p>
                <p>Password: <input type="password" onChange={(e) => setPassword(e.target.value)} /></p>
            </form>
            <h4>
                first_name from state : {first_name} <br />
                last_name from state : {last_name}  <br />
                email_name from state : {email}  <br />
                password from state : {password}  <br />
            </h4>
        </fieldset>
    )
}

export default FirstForm