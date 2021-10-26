import React from 'react'
import '../styles/DataPagination.scss'
import { DataEntry } from './DataEntry';
import { PaginationController } from './PaginationController';

export const DataPagination = ({ data, loading, currentPage, entriesPerPage, callback, totalEntries }) => {

    // console.log(data);
    if (loading) {
        return <h1>Loading</h1>
    }

    // return <ul id='pagination-ul'>
    //         {data.map((object, index) => {
    //             return <li className='pagination-li'><DataEntry data={object} index={(entriesPerPage * (currentPage - 1)) + index + 1}/></li>
    //         }
    //         )}
    //     </ul>

    return (
        // <div style={{ 'overflowX': 'auto' }}>

            <table id='data-table'>
                {/* <colgroup>
                <col span='1' id='col-image'/>
                <col span='1' id='col-id'/>
                <col span='1' id='col-symbol'/>
                <col span='1' id='col-price'/>
                <col span='1' id='col-24h'/>
                <col span='1' id='col-ath'/>
                <col span='1' id='col-vol'/>
            </colgroup> */}
                <thead id='data-headers'>
                    <tr>
                        <th>

                        </th>
                        <th>
                            #
                        </th>
                        <th>
                            Coin
                        </th>
                        <th>
                            Price
                        </th>
                        <th>
                            24HR
                        </th>
                        <th>
                            ATH
                        </th>
                        <th>
                            Volume
                        </th>
                    </tr>
                </thead>
                <tbody id='data-table-body'>
                    {data.map((object, index) => {
                        return <DataEntry key={index} data={object} index={(entriesPerPage * (currentPage - 1)) + index + 1} />
                    })}
                </tbody>
                <td colSpan='7'>
                    <PaginationController entriesPerPage={entriesPerPage} totalEntries={totalEntries} callback={callback} currentPage={currentPage} />
                </td>
            </table>
        // </div>
    )
}
