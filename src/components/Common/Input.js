import React from 'react'
import "./Input.css"

const MyInput = ({type = 'text', name = '', value = '', onChange}) => {
    return (
        <input {...{type, name, value, onChange}} />
    )
}

export default MyInput;