import React, { useState } from 'react'



const Box_generator = ({ box, setBox }) => {
    const [oneBox, setOneBox] = useState("")
    // const [height, setHeight] = useState("")
    // const [width, setWidth] = useState("")
    const handleColor = (e) => {
        e.preventDefault()
        setBox([...box, oneBox])
        setOneBox("")
    }
    return (
        <fieldset>
            <form onSubmit={handleColor}>
                <legend>
                    <h2>Box_generator</h2>
                </legend>
                <input type="text"
                    onChange={(e) => setOneBox(e.target.value)}
                    value={oneBox} />
                <button>Add Box</button>

                {/* <input type="text"
                    onChange={(e) => setHeight(e.target.value)}
                    value={height} />
                <button>Add height</button>

                <input type="text"
                    onChange={(e) => setWidth(e.target.value)}
                    value={width} /> */}
                {/* <button>Add width</button> */}

            </form>



        </fieldset>

    )
}

export default Box_generator