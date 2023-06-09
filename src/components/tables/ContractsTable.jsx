import React from 'react';
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import { Box, IconButton, Tooltip } from '@mui/material';
import { Preview } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const columns = [
  {   
    field: '_id', 
    headerName: '_ID', 
    hide:true
  },
  {
    field: 'startHour',
    headerName: 'Start hour',
    width: 90,
  },
  {
    field: 'serviceDay',
    headerName: 'Servicing Day',
    width: 130,
  },
  {
    field: 'vehicleType',
    headerName: 'Vehicle Type',
    width: 140,
  },
  {
    field: 'vehicleModel',
    headerName: 'Vehicle Model',
    width: 140,
  },
  {
    field: 'typeOfService',
    headerName: 'Type of Service',
    width: 140,
  },
  {
    field: 'clientConfirmation',
    headerName: 'Client Confirmation',
    width: 120,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 100,
  },
  {
    field: 'workStatus',
    headerName: 'Progress',
    width: 100,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    type: 'actions',
    width: 120,
    renderCell: (params) => <TableActions params= {params} />
  },
]

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

export const TableStyles = {
  padding: '0px',
  width: '100%',
  height: '270px',
  background: 'white',
  marginTop: '20px' 
}

var rows = [];

export default function ContractsTable({data = []}) {
  // data.forEach(element => {
  //   element.serviceDay = new Date(element.serviceDay).toDateString();
  // })
  rows = data;
  
  return (
    <Box sx={TableStyles}>
      <DataGrid
        rowHeight={38}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        experimentalFeatures={{newEditingApi: true}}
        components={{Toolbar: CustomToolbar}}
      />
    </Box>
      
  );
};

// Table actions
const TableActions = ({params}) => {
  const navigate = useNavigate();

  return (
    <Box>
      <Tooltip title='View / Edit'>
        <IconButton onClick={() => {  
          navigate(`/admin/request/${params.row._id}`);
          }}>
          <Preview />
        </IconButton>
      </Tooltip>
    </Box>
  )
}