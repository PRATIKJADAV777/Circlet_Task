import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { Box } from '@mui/material';

export default function App() {

  const [data, setData] = React.useState([])
  console.log(data)
  const fetchData = async () => {
    try {
      const result = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setData(result.data)
    } catch (error) {
      console.log(error)
    }
  }

  React.useEffect(() => {
    return () => {
      fetchData()
    }
  }, [])

  const columns = [
    { field: 'id', headerName: 'id', width: 50 },
    {
      field: 'userId',
      headerName: 'userId',
      width: 50,
      editable: true,
    },
    {
      field: 'title',
      headerName: 'title',
      width: 500,
      editable: true,
    },
    {
      field: 'body',
      headerName: 'body',
      width: 700,
      editable: true,
    },
  ];

  return (

    <Box sx={{ height: 630, width: '100%' }} className="container pt-4" >
      <DataGrid
        style={{ border: "2px solid grey" }}
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 9,
            },
          },
        }}
        pageSizeOptions={[5]}
        // checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}