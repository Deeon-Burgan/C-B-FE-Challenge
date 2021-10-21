import React from 'react'
import '../styles/DataEntry.scss'

export const DataEntry = ({ data, index }) => {

    /*
        image index symbol cPrice 24priceChange ath volume
    */
    // return (
    //     <div className='data-entry-container'>
    //         {/* <div id='data-image'><img src={data.image} alt='logo'/></div> 
    //         <div id='data-index'>{index}</div> 
    //         <div id='data-symbol'>{data.symbol}</div> 
    //         <div id='data-cPrice'>{data.current_price}</div> 
    //         <div id='data-24'>{data.price_change_24h}</div> 
    //         <div id='data-ath'>{data.ath}</div> 
    //         <div id='data-volume'>{data.total_volume}</div>  */}
    //     </div>
    // )


    return (
        <tr id='entry-row'>
            <td id='entry-image'>
                <img src={data.image} alt='logo' />
            </td>
            <td id='entry-index'>
                {index}
            </td>
            <td id='entry-symbol'>
                {data.symbol}
            </td>
            <td id='entry-price'>
                {data.current_price}
            </td>
            <td id='entry-24h'>
                {data.price_change_24h}
            </td>
            <td id='entry-ath'>
                {data.ath}
            </td>
            <td id='entry-volume'>
                {data.total_volume}
            </td>
        </tr>
    )
}
