import React, { useState ,useEffect} from 'react'
import useFilters from '../hooks/useFilters';

const MyApiData = () => {
    const [data, setData] = useState([]);
    const [query,setQuery] = useState()
    const [q, setQ] = useState('');
    const {columnList,filteredData,renderData} = useFilters(data,query)
    
    const [searchColumns, setSearchColumns] = useState([
      
      'userId'
      
      
    ]);
    

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/')
        .then((response) => response.json())
        .then((json) => setData(json));
        
      
      },[])
  return (
    <div>
        <h2>My Api Data with filter</h2>
        <input
          type='text'
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
      
    </div>
  )
}

export default MyApiData
