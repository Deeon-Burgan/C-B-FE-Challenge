import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { DataPagination } from './DataPagination';
import { PaginationController } from './PaginationController';

export const LandingPage = () => {

    const [data, setData] = useState([]);
    const [currentData, setCurrentData] = useState([]); 
    const [loading, setLoading] = useState(false);
    const [pageIndex, setPageIndex] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
    const [filterText, setFilterText] = useState('');

    const getData = async () => {
        setLoading(true);
        const result = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud");
        setData(result.data);
        setCurrentData(result.data);
        setLoading(false);
    }

    useEffect(() => {
        getData();
    }, [])

    const incrementPage = (number) => {
        setPageIndex(number);
    }

    const indexOfLastCurrent = pageIndex * postsPerPage;
    const indexOfFirstCurrent = indexOfLastCurrent - postsPerPage;
    let cData = currentData.slice(indexOfFirstCurrent, indexOfLastCurrent);

    useEffect(() => {
        const newList = data.filter((entry) => {
            // console.log(entry.symbol.toLowerCase());
            console.log(`${entry.name} and ${filterText}`)
            return (entry.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0) || (entry.symbol.toLowerCase().indexOf(filterText.toLowerCase()) >= 0);
        })

        setCurrentData(newList);
        setPageIndex(1);
    }, [filterText])

    const onChangeFilterText = (event) => {
        setFilterText(event.target.value);
    }

    return (
        <div>
            {loading && <div>LOADING</div>}
            <input type='text' value={filterText} onChange={(e) => onChangeFilterText(e)} />
            {!loading && currentData.length > 0 && <DataPagination data={cData} loading={loading} currentPage={pageIndex} entriesPerPage={postsPerPage} />}
            <PaginationController entriesPerPage={postsPerPage} totalEntries={currentData.length} callback={incrementPage} />
        </div>
    )
}
