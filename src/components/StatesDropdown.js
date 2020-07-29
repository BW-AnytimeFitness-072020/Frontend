import React from 'react'
// import { states } from '../constants/index'


function Dropdown(props) {
    const {
        data,
        id, 
        name,
        value,
        onChange,
    } = props
    const dataArray = Object.entries(data)

    return (
        <select
            id={id} 
            name={name}
            value={value}
            onChange={onChange}
        >
        <option value=''>Select</option>
            {
            dataArray.map(data =>
                <option key={data[0]} value={data[0]}>{data[1]}</option>
            )
            }
        </select>
    )
}

export default Dropdown