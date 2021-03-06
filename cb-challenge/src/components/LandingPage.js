import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { DataPagination } from './DataPagination';
import { PaginationController } from './PaginationController';
import '../styles/LandingPage.scss'
import { Trending } from './Trending/Trending';
import { TitledBreak } from './Titled-Break/TitledBreak';
import { DataTableHeader } from './DataTableHeader/DataTableHeader';

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
        // console.log(result); 
        // .catch((error) => {
        //     return null;
        // });
        // return false;
        if(!result){
            return false;
        }
        setData(result.data);
        setCurrentData(result.data);
        setLoading(false);
        return result;
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
        <div id='landing-page'>
            {loading && <div>LOADING</div>}
            <TitledBreak line='Top 100 Cryptos'/>
            {/* <input type='text' value={filterText} onChange={(e) => onChangeFilterText(e)} /> */}
            <DataTableHeader value={filterText} onChange={onChangeFilterText}/>
            {data.length === 0 && <span>Unfortunately I have received no data, please try again!</span>}
            {!loading && currentData.length > 0 && <DataPagination data={cData} loading={loading} currentPage={pageIndex} entriesPerPage={postsPerPage} callback={incrementPage} totalEntries={currentData.length}/>}
            {/* <PaginationController entriesPerPage={postsPerPage} totalEntries={currentData.length} callback={incrementPage} /> */}
        </div>
    )
}