import React, { useState, useEffect } from "react";
import axios from "axios";
import { set } from "mongoose";


const EditProduct = (props) => {
    const { id } = useParams();

    const [Title, setTitle] = useState("");
    const [Price, setPrice] = useState("");
    const [Description, setDescription] = useState("");


    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setTitle(res.data.Title)
                setPrice(res.data.Price)
                setDescription(res.data.Description)
            })
    }, []);
    const EditProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/' + id, {
            Title,
            Price,
            Description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    return (
        <fieldset>
            <legend>
                <h2>Update One Product</h2>
            </legend>
            <form onSubmit={updateProduct}>
                <p>
                    <label htmlFor="">Title : </label>
                    <input type="text"
                        value={Title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </p>

                <p>
                    <label htmlFor="">Price : </label>
                    <input type="number"
                        value={Price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </p>

                <p>
                    <label htmlFor="">Description : </label>
                    <input type="text"
                        value={Description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </p>
                <button>Submit</button>
            </form>

        </fieldset>
    )
}


export default EditProduct