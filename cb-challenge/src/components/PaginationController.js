import React from 'react'
import '../styles/PaginationController.scss'

export const PaginationController = ({entriesPerPage, totalEntries, callback, currentPage}) => {

    const numberOfPages = Math.ceil(totalEntries / entriesPerPage);

    const unselectedDiv = {
        'background':'white',
        'border':'1px groove black',
        'border-right':'none',
        '&:last-child':{
            'border-right':'1px groove black'
        }
    }

    const selectedDiv = {
        'background':'#dad7de',
        'border':'1px groove black',
        'border-right':'none',
        '&:last-child':{
            'border-right':'1px groove black'
        }
    }

    // const dis = () => {

    // }
    // const style = 'button-div';
    // if((key + 1) == currentPage){
    //     style += 'selected-div'
    // }else{
    //     style += 'unselected-div'
    // }

    return (
        <ol id='pagination-controller-ol'>
            {[...Array(numberOfPages)].map((index, key) => {
                let style = 'button-div';
                if((key + 1) === currentPage){
                    style += ' selected-div'
                }else{
                    style += ' unselected-div'
                }

                return <li key={key} className='pagination-controller-li'>
                    <div data-testid='pagination-button' className={style} onClick={() => callback(key + 1)}>{key + 1}</div>
                </li>
            })}
        </ol>
    )
}
