import { getQueriesForElement } from '@testing-library/dom';
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

    const Formatter = new Intl.NumberFormat('en-US', {
        style: 'currency', 
        currency: 'AUD',
        maximumFractionDigits: 5
    });

    const up = {
        'color':'green'
    }
    
    const down = {
        'color':'red'
    }

    const stable = {
        'color':'black'
    }

    const whatColorAmI = () => {
        if(data.price_change_24h > 0){
            return up;
        }else if(data.price_change_24h < 0){
            return down;
        }else{
            return stable;
        }
    }

    return (
        <tr id='entry-row'>
            <td id='entry-image'>
                <img src={data.image} alt='logo' />
            </td>
            <td id='entry-index'>
                {index}
            </td>
            <td id='entry-symbol' data-heading='Coin'>
                <h4>
                    {data.symbol}
                </h4>
                <h3>
                    {data.name}
                </h3>
            </td>
            <td id='entry-price' data-heading='Price'>
                {`${Formatter.format(data.current_price)}`}
            </td>
            <td id='entry-24h' style={whatColorAmI()} data-heading='24HR'>
                {`${Formatter.format(data.price_change_24h)}`}
            </td>
            <td id='entry-ath' data-heading='ATH'>
                {`${Formatter.format(data.ath)}`}
            </td>
            <td id='entry-volume' data-heading='Volume'>
                {`${Formatter.format(data.total_volume)}`}
            </td>
        </tr>
    )
}
