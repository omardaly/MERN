import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const AuthorUpdate = () => {
    const { id } = useParams()
    const [author, setAuthor] = useState({ name: "" });
    const [errors, setErrors] = useState({ name: "" })
    const navigate = useNavigate()
    const updateAuthor = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/${id}`, author)
            .then(response => {
                console.log(response.data)
                navigate('/')
            })
            .catch(error => {
                console.log("Errors from Backend", error.response.data);
                console.log(Object.keys(error.response.data));
                const errs = { name: "" }
                for (let key of Object.keys(error.response.data)) {
                    errs[key] = error.response.data[key].message
                }
                console.log(errs);
                setErrors({ ...errors, ...errs })
            })
    }

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/authors/${id}`)
            .then(response => {
                console.log(response);
                setAuthor(response.data)
            })
            .catch(error => console.log(error))
    }, [id])
    return (
        <div>
            <form onSubmit={updateAuthor}>
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
                    <Link to={'/'}>Cancel</Link>
                </button>


                <button>Submit</button>

            </form>
        </div>
    )
}

export default AuthorUpdate 