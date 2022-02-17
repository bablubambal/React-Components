import React from 'react'

const DataView = ({data}) => {
    const columns = data[1] && Object.keys(data[1]);
    console.log(columns)
  return (
    <>
    <table cellPadding={0} cellSpacing={0}>
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
    </table>
      
    </>
  )
}

export default DataView
