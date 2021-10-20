import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { DataPagination } from './DataPagination';
import { PaginationController } from './PaginationController';

export const LandingPage = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pageIndex, setPageIndex] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            const result = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud");
            setData(result.data);
            setLoading(false);
        }

        getData();
    }, [])

    const incrementPage = (number) => {
        console.log(`change to page ${number}`)
        setPageIndex(number);
    }

    const indexOfLastCurrent = pageIndex * postsPerPage;
    const indexOfFirstCurrent = indexOfLastCurrent - postsPerPage;
    const currentData = data.slice(indexOfFirstCurrent, indexOfLastCurrent);

    return (
        <div>
            {loading && <div>LOADING</div>}
            {!loading && currentData.length > 0 && <DataPagination data={currentData} loading={loading}/>}
            <PaginationController entriesPerPage={postsPerPage} totalEntries={data.length} callback={incrementPage}/>
        </div>
    )
}
