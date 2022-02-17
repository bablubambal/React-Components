import React from 'react'
import { useState } from 'react';

const useFilters = ({d,qu}) => {
    const [data, setData] = useState(d);
    const[fullData,setFullData] = useState()
    const [columnList,setColumnList] = useState()
    const [filteredData,setFilteredData] = useState()
    const [q, setQ] = useState(qu);
    
    const [searchColumns, setSearchColumns] = useState([
      
      'userId'
      
      
    ]);

    // Getting all Data of the columns
const columns = data[0] && Object.keys(data[0]);
setColumnList( data[1] && Object.keys(data[1]) );

const renderData =( <> <table cellPadding={0} cellSpacing={0}>
<thead>
    <tr>
        {data[1] & columns?.map(heading => <th>{heading}</th>)}
        
    </tr>
</thead>
<tbody>
{data?.map((row)=>(
        <tr>
            {columns.map((column)=>(
                <td>{row[column]}</td>
            ))}
        </tr>
    ))}
</tbody>
</table></> )


//Getting List of Columns



    // Search function to search the things
    function search(rows) {
        return rows.filter((row) =>
          searchColumns.some(
            (column) =>
              row[column]
                .toString()
                .toLowerCase()
                .indexOf(q.toLowerCase()) > -1,
          ),
        );
      }

setFilteredData(search(data))
  return {
      columnList,
filteredData,
renderData,
  }
}

export default useFilters
