import React, { useState } from 'react'
import './Trending.scss'
import axios from 'axios'
import { useEffect } from 'react/cjs/react.development';

export const Trending = () => {

    const [data, setData] = useState({});
    const [loadingData, setLoadingData] = useState(true);

    const getData = async () => {
        setLoadingData(true);
        const result = await axios.get('https://api.coingecko.com/api/v3/search/trending');
        setData(result.data);
        setLoadingData(false);
    }

    useEffect(() => {
        getData();
    }, [])

    const up = {
        'margin': '0vh 2vw',
        'width': '25%',
        'border': '1px solid black',
    }

    const down = {
        'margin': '0vh 2vw',
        'width': '25%',
        'border': '1px solid black',
    }

    const stable = {
        'margin': '0vh 2vw',
        'width': '25%',
        'border': '1px solid black',
    }


    const coins = (
        Object.keys(data).length !== 0 && data.coins.slice(0, data.coins.length - 1).map((coin, index) => {
            return <div>
                {coin.item.name}
            </div>
        })
    )

    const trendingDisplay = (
        coins
    )

    return (
        <div className='trending'>
            {trendingDisplay}
        </div>
    )
}
