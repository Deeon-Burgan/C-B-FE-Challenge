import React from 'react'
import '../styles/DataPagination.scss'
import { DataEntry } from './DataEntry';

export const DataPagination = ({data, loading, currentPage, entriesPerPage}) => {

    // console.log(data);
    if(loading){
        return <h1>Loading</h1>
    }

    return <ul id='pagination-ul'>
            {data.map((object, index) => {
                return <li className='pagination-li'><DataEntry data={object} index={(entriesPerPage * (currentPage - 1)) + index + 1}/></li>
            }
            )}
        </ul>
    
}
