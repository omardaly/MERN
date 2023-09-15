import React, { useState } from 'react'
import axios from 'axios'

const AddProduct = (props) => {
    const [product, setProduct] = useState({ Title: "", Price: "", Description: "" })
    const formHandler = (e) => {
        e.preventDefault()
        console.log("SUBMITTED PERSON : ", product);
        axios.post("http://localhost:8000/api/product", product)
            .then(serverResponse => console.log(serverResponse))
            .catch(serverError => console.log(serverError))
        setProduct({ Title: "", Price: "", Description: "" })
    }
    return (
        <fieldset>
            <legend>😎😎😎AddProduct😎😎😎</legend>
            {/* <h4>
                PERSON FROM STATE {JSON.stringify(product)}
            </h4> */}
            <form onSubmit={formHandler}>

                <p>
                    Title: <input type="text"
                        onChange={(e) => setProduct({ ...product, Title: e.target.value })}
                        value={product.Title} />
                </p>

                <p>Price : <input type="number"
                    onChange={(e) => setProduct({ ...product, Price: e.target.value })}
                    value={product.Price}
                /></p>

                <p>Description : <input type="text-area"
                    onChange={(e) => setProduct({ ...product, Description: e.target.value })}
                    value={product.Description}
                /></p>

                <button>Submit</button>
            </form>
        </fieldset>
    )
}

export default AddProduct