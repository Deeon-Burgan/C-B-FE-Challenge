import React from 'react'
import '../styles/PaginationController.scss'

export const PaginationController = ({entriesPerPage, totalEntries, callback, currentPage}) => {

    const numberOfPages = Math.ceil(totalEntries / entriesPerPage);

    const unselectedDiv = {
        'background':'white',
        'border':'1px groove black'
    }

    const selectedDiv = {
        'background':'#dad7de',
        'border':'1px groove black'
    }

    return (
        <ol id='pagination-controller-ol'>
            {[...Array(numberOfPages)].map((index, key) => {
                return <li key={key} className='pagination-controller-li'>
                    <div style={(key + 1) == currentPage ? selectedDiv : unselectedDiv}onClick={() => callback(key + 1)} className='pagination-controller-index'>{key + 1}</div>
                </li>
            })}
        </ol>
    )
}
