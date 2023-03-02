import React, { useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'title',
      headerName: 'Product title',
      width: 150,
      editable: true,
    },
    {
        field: 'description',
        headerName: 'Product description',
        width: 150,
        editable: true,
      },
      {
        field: 'category',
        headerName: 'Product category',
        width: 150,
        editable: true,
      },
  ];

 /*  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ]; */
  

const About = () => {

    const [data, setData] = useState([]);
    useEffect(() =>{
        axios.get('https://fakestoreapi.com/products').then((res) =>{
        setData(res.data);
        });
    }, []);
    
/*     console.log ("res.data", data); */

  return (
    <div className='container'>
        <Box sx={{ height: 400, width: '100%', marginTop: 15 }}>
                <DataGrid
                    rows={data}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    disableSelectionOnClick
                    experimentalFeatures={{ newEditingApi: true }} />
        </Box>
    </div>
  )
}

export default About