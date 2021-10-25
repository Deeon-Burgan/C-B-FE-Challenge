import React from 'react'
import './TitledBreak.scss'

export const TitledBreak = ({line}) => {
    return (
        <div className='titled-break'>
            <div></div>
            <h2>{line}</h2>
            <div></div>
        </div>
    )
}
