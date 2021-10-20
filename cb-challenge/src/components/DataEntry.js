import React from 'react'
import '../styles/DataEntry.scss'

export const DataEntry = ({data, index}) => {

    /*
        image index symbol cPrice 24priceChange ath volume
    */
    return (
        <div className='data-entry-container'>
            {/* <div id='data-image'><image src={data.image}/></div>  */}
            <div id='data-index'>{index}</div> 
            <div id='data-symbol'>{data.symbol}</div> 
            <div id='data-cPrice'>{data.current_price}</div> 
            <div id='data-24'>{data.price_change_24h}</div> 
            <div id='data-ath'>{data.ath}</div> 
            <div id='data-volume'>{data.total_volume}</div> 
        </div>
    )
}
