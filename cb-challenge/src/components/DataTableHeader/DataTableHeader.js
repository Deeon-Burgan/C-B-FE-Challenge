import React from 'react'
import './DataTableHeader.scss'

export const DataTableHeader = ({value, onChange}) => {
    return (
        <div className='data-table-header'>
            <h2>Crypto Info</h2>
            <input type='text' name='Search' placeholder='Search' value={value} onChange={(e) => onChange(e)} />
        </div>
    )
}
