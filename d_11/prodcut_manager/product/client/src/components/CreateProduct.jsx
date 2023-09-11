import React, { useState, useEffect } from 'react'
import axios from 'axios'


const CreateProduct = (props) => {
    const [product, setProduct] = useState({ Title: "", Price: "", Description: "" })
    // useEffect(() => {
    //     axios.get("http://localhost:8000/api/product")
    //         .then(serverResponse => {
    //             console.log(serverResponse.data, "✅✅✅")
    //             setProduct(serverResponse.data)
    //         })
    //         .catch(serverError => console.log(serverError, "❌❌❌"))
    // }, [])
    const handlerForm = (e) => {
        e.preventDefault()
        console.log("MY PRODUCT :", product);
        axios.post("http://localhost:8000/api/product", product)
            .then(serverResponse => console.log(serverResponse))
            .catch(serverError => console.log(serverError))

        setProduct({
            Title: "",
            Price: "",
            Description: ""
        })
    }

    return (
        <fieldset>
            <legend>
                <h2>AllProduct</h2>
            </legend>
            <h4>
                Product FROM STATE {JSON.stringify(product)}
            </h4>
            <form onSubmit={handlerForm}>
                <p>Title: <input type='text'
                    onChange={(e) => setProduct({ ...product, Title: e.target.value })}
                    value={product.Title}
                /></p>
                <p>Price : <input type='Number'
                    onChange={(e) => setProduct({ ...product, Price: e.target.value })}
                    value={product.Price}
                /></p>
                <p>Description : <input type='text'
                    onChange={(e) => setProduct({ ...product, Description: e.target.value })}
                    value={product.Description}
                /></p>

                <button>Submit</button>

            </form>
        </fieldset>

    )
}

export default CreateProduct