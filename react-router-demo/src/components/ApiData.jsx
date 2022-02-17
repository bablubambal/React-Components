import React,{useState,useEffect} from 'react'
import DataView from './DataView';

const ApiData = () => {
  const [data, setData] = useState([]);
  const [q, setQ] = useState('');
  
  const [searchColumns, setSearchColumns] = useState([
    
    'userId'
    
    
  ]);

useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/todos/')
  .then((response) => response.json())
  .then((json) => setData(json));
  

},[])
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
// Getting all Data of the columns
const columns = data[0] && Object.keys(data[0]);


  return (
   <>
   <h2>Api Data...</h2>
   <input
          type='text'
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
{columns && columns?.map((column)=>(
  <label>
    <input 
    type="checkbox"
    checked = {searchColumns.includes(column)}
    onChange ={(e)=>{
      const checked = searchColumns.includes(column);
      setSearchColumns((prev)=> checked ? prev.filter(sc=> sc!==column):[...prev,column],); 
     
     
    }} />
     {column}


  </label>
))}



<div>
  <DataView data = {search(data)}/>
</div>

   </>
  )
}

export default ApiData
