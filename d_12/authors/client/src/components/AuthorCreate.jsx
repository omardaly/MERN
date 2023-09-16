import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const AuthorCreate = (props) => {
    const navigate = useNavigate()
    const [author, setAuthor] = useState({ name: "" })
    const [errors, setErrors] = useState({ name: "" })
    const crateAuthor = (e) => {
        e.preventDefault()
        axios
            .post('http://localhost:8000/api/authors', author)
            .then(response => {
                console.log(response.data);
                navigate('/')
            })
            .catch(error => {
                const errs = { name: "" }
                for (let key of Object.keys(error.response.data)) {
                    errs[key] = error.response.data[key].message
                }
                console.log("errors", errs);
                setErrors({ ...errors, ...errs })
            })
    }
    return (
        <div>
            <Link to='/'>Home</Link>
            <form onSubmit={crateAuthor}>
                <div className="form-group mb-3">
                    <label htmlFor="">Name :</label>
                    <br />
                    <input type="text" className="form-control" onChange={(e) => setAuthor({ ...author, name: e.target.value })}
                        value={author.name}
                    />
                    {errors.name && <span className='text-danger h5'> {errors.name}</span>}
                </div>
                <br />
                <button>
                    <Link to={'/authors'}>Cancel</Link>
                </button>


                <button>Submit</button>

            </form>
        </div>
    )
}
export default AuthorCreate