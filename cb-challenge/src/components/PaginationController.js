import React from 'react'
import '../styles/PaginationController.scss'

export const PaginationController = ({entriesPerPage, totalEntries, callback}) => {

    const numberOfPages = Math.ceil(totalEntries / entriesPerPage);
    return (
        <ol id='pagination-controller-ol'>
            {[...Array(numberOfPages)].map((index, key) => {
                return <li key={key} className='pagination-controller-li'>
                    <div onClick={() => callback(key + 1)} className='pagination-controller-index'>{key + 1}</div>
                </li>
            })}
        </ol>
    )
}
