import React, { useState, useEffect } from 'react'
import axios from 'axios'
const AllProduct = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(serverResponse => {
                console.log(serverResponse.data)
                setProduct(serverResponse.data)
            })
            .catch(serverError => console.log(serverError, "🐱‍🚀🐱‍🚀🐱‍🚀"))
    }, [])
    return (
        <fieldset>
            <legend>😎😎😎_AllProducts_😎😎😎</legend>
            {product.map(product => <div key={product._id}
                style={{ backgroundColor: product.isFunny ? "cornflowerblue" : "aqua" }} >
                <h4>Title: {product.Title}</h4>
                <button onClick={()=>}>Edit</button>
            </div>)}
        </fieldset>
    )
}

export default AllProduct