import React from 'react'
import '../styles/DataPagination.scss'

export const DataPagination = ({data, loading}) => {

    console.log(data);
    if(loading){
        return <h1>Loading</h1>
    }

    return <ul id='pagination-ul'>
        {console.log(data)}
            {data.map((object, index) => {
                return <li className='pagination-li'>{object.id}</li>
            }
            )}
        </ul>
    
}
