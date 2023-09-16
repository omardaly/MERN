import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const AuthorShow = (props) => {
    const [authors, setAuthors] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(serverResponse => {
                console.log(serverResponse)
                setAuthors(serverResponse.data)
            })
            .catch(serverError => console.log(serverError))
    }, [])

    const DeleteHandle = (id) => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then(response => {
                console.log(response)
                const filteredAuthors = authors.filter(author => author._id != id)
                setAuthors(filteredAuthors)
            })
            .catch(error => console.log(error))
    }


    return (
        <>
            <legend>
                <h1>All Authors</h1>
            </legend>

            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>

                    </tr>
                </thead>

                <tbody>
                    {authors.map(author =>

                        <tr key={author._id}>

                            <td key={author._id}>{author.name}</td>
                            <td>
                                <Link to={`/authors/${author._id}/edit`}>Edit </Link> <button onClick={() => DeleteHandle(author._id)}>Delete</button>

                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <Link to={'/authors/new'}>Add Author</Link>

        </>
    )

}
export default AuthorShow