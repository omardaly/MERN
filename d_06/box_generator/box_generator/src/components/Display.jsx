import React from 'react'
import './Box.css'

const Display = ({ box }) => {
    console.log(box);
    return (
        <fieldset>
            <legend>
                <h2>Display</h2>
            </legend>
            <div className='box-container'>
                {box.map((box, idx) =>
                    <div
                        className='box' key={idx}
                        style={{ backgroundColor: box }}
                    ></div>)}
            </div>
        </fieldset>
    )
}

export default Display