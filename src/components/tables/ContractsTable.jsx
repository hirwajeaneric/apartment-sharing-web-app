import React from 'react';
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import { Box, IconButton, Tooltip } from '@mui/material';
import { Preview } from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';

const columns = [
  {   
    field: '_id', 
    headerName: '_ID', 
    hide:true
  },
  {
    field: 'ownerName',
    headerName: 'Owner',
    width: 150,
  },
  {
    field: 'ownerSignature',
    headerName: 'Signature of owner',
    width: 140,
  },
  {
    field: 'totalPayment',
    headerName: 'Total Payment',
    width: 120,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 90,
  },
  {
    field: 'createdOn',
    headerName: 'Created On',
    width: 120,
  },
  {
    field: 'startDate',
    headerName: 'Start Date',
    width: 120,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    type: 'actions',
    width: 70,
    renderCell: (params) => <TableActions parameters= {params} />
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
  height: '300px',
  background: 'white',
  marginTop: '20px' 
}

var rows = [];

export default function ContractsTable({data}) {
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
const TableActions = ({parameters}) => {
  const navigate = useNavigate();
  const params = useParams();

  return (
    <Box>
      <Tooltip title='View / Edit'>
        <IconButton onClick={() => {  
          navigate(`/user/${params.fullName}/contract/${parameters.row._id}`);
          }}>
          <Preview />
        </IconButton>
      </Tooltip>
    </Box>
  )
}