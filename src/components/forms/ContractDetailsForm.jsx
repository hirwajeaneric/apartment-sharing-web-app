import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import { Link, useParams } from 'react-router-dom';
import { CustomFormControlOne, HeaderThree, LeftContainer, RightContainer, TenantCard, TwoSidedContainer } from '../styled-components/generalComponents';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { APIS, PROTOCOL } from '../../utils/APIS';
import ResponseComponent from '../sections/ResponseComponent';
import { getContractDetails } from '../../redux/features/contractSlice';

export default function ContractDetailsForm() {
  // FORM PROCESSING AND RESPONSE PROVISION
  const [isProcessing, setIsProcessing] = useState(false);
  const [isProcessing2, setIsProcessing2] = useState(false);
  const [responseMessage, setResponseMessage] = useState({ message: '', severity: ''});
  const [contractDetails, setContractDetails] = useState({})
  const [tenants, setTenants] = useState([])
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const params =  useParams();
  const dispatch = useDispatch();

  // OTHER STATES
  const [formData, setFormData] = useState({
    allowedToShare: '',
    response:'',
    status: '',
  });

  useEffect(()=> {
    
  },[]);

  useEffect(() => {
    axios.get(APIS.contractApis.findById+params.contractId)
    .then(response => {
      setContractDetails(response.data.contract);
      setTenants(response.data.contract.tenants)
      console.log(response.data.contract.tenants);
    })
    .catch(error => console.log(error));
  },[params])

  const handleFormInputs = event => {
    setFormData({ ...formData, [event.target.name] : event.target.value });
  }

  const submitRequest = (status) => {
    formData.status = status;

    if (status === 'Accepted') {
      setIsProcessing(true);
    } else if (status === 'Rejected') {
      setIsProcessing2(true);
    }

    console.log(formData);
    console.log(APIS.rentRequestApis.update+params.rentRequestId);

    axios.put(APIS.rentRequestApis.update+params.rentRequestId, formData)
    .then(response => {
      setTimeout(() => {
        if (response.status === 200) {
          setIsProcessing(false);
          setIsProcessing2(false);

          // dispatch(getRentRequests(JSON.parse(localStorage.getItem('usrInfo')).id));

          setResponseMessage({ message: 'Rent Request Updated', severity:'success'});
          setOpen(true);
        }
        // dispatch(getRentRequests(response.data.rentRequest.requestingUserId));
      },3000);
    })
    .catch(error => {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setIsProcessing(false);
        setIsProcessing2(false);
        setResponseMessage({ message: error.response.data.msg, severity:'error'})
        setOpen(true);
      }
    })
  }

  const { isLoading } = useSelector((state) => state.contract);
  
  if (isLoading) {
    return (
      <p style={{ marginTop : '30px' }}>Loading...</p>
    )
  }

  return (
    <TwoSidedContainer style={{ flexDirection:'column', marginTop: '20px', gap:'20px', width: '100%', background: 'white', padding: '30px', boxShadow: '0 1.5px 5px 0 rgba(0, 0, 0, 0.19)', borderRadius:'5px' }}>
      {/* GENERAL DETAILS  */}
      <div style={{ display: 'flex', flexDirection:'column', gap: '20px', alignItems:'flex-start', width:'100%'}}>
        <HeaderThree style={{ margin: '0', fontWeight: '600', color:'green', width: '100%', paddingBottom: '10px', borderBottom: '1px solid green' }}>General Details</HeaderThree>
        <p style={{ lineHeight: '25px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto animi eligendi reprehenderit numquam ad quibusdam repellendus minima nostrum? Amet doloremque, sit praesentium officia aut nulla saepe nesciunt minus corporis adipisci.</p>
        <TwoSidedContainer style={{ flexDirection:'row', width: '100%' }}>
          <LeftContainer style={{ flexDirection: 'column', gap: '20px', justifyContent:'flex-start', alignItems:'flex-start'}}>
            <p><strong>Created on: </strong> {new Date(contractDetails.createdOn).toUTCString()}</p>
            <p><strong>Contract Status: </strong> {contractDetails.status}</p>            
            <p><strong>Total Payment:</strong> {contractDetails.totalPayment}</p>
          </LeftContainer>
          <RightContainer style={{ flexDirection: 'column', gap: '20px', justifyContent:'flex-start', alignItems: 'flex-start' }}>
            <p><strong>Start date:</strong> {contractDetails.startDate}</p>
            <p><strong>Stop date:</strong> {contractDetails.stopDate}</p>
            <p><Link to={`${PROTOCOL}://localhost:5555/property/${contractDetails.propertyId}`} style={{ color: 'blue', textDecoration: 'none' }}>View Apartment</Link></p>
          </RightContainer>
        </TwoSidedContainer>
      </div>

      {/* OWNER  */}
      <div style={{ display: 'flex', flexDirection:'column', marginTop:'20px', gap: '20px', alignItems:'flex-start', width:'100%'}}>
        <HeaderThree style={{ margin: '0', fontWeight: '600', color:'green', width: '100%', paddingBottom: '10px', borderBottom: '1px solid green' }}>Owner</HeaderThree>
        <TwoSidedContainer style={{ flexDirection:'row', width: '100%' }}>
          <LeftContainer style={{ flexDirection: 'column', gap: '20px', justifyContent:'flex-start', alignItems:'flex-start' }}>
            <p><strong>Name:</strong> {contractDetails.ownerName}</p> 
            <p><strong>Email:</strong> {contractDetails.ownerEmail}</p>
            <p><strong>Signature:</strong> {contractDetails.ownerSignature}</p> 
          </LeftContainer>
          <RightContainer style={{ flexDirection: 'column', gap: '20px', justifyContent:'flex-start', alignItems: 'flex-start' }}>
            <p><strong>Sign date:</strong> {contractDetails.ownerSignedOn}</p>
            <Button size='small' variant='contained' color='primary' style={{ marginBottom:'30px' }}>Sign</Button>
          </RightContainer>
        </TwoSidedContainer>
      </div>

      {/* TENANTS  */}
      <HeaderThree style={{ margin: '0', fontWeight: '600', marginTop:'20px', color:'green', width: '100%', paddingBottom: '10px', borderBottom: '1px solid green' }}>Tenants</HeaderThree>
      <TwoSidedContainer style={{ flexDirection:'row', width: '100%' }}>
        {tenants.length !== 0 && tenants.map((tenant, index) => (
          <TenantCard key={index}>
            <h4>Tenant {index+1}</h4>
            <p><strong>Name:</strong> {tenant.tenantName}</p> 
            <p><strong>Email:</strong> {tenant.tenantEmail}</p>
            <p><strong>Phone:</strong> {tenant.tenantPhone}</p>
            <p><strong>Allowed To Share:</strong> {tenant.allowedToRepost}</p>
            <p><strong>Signature:</strong> {tenant.signature}</p> 
            <p><strong>Sign date:</strong> {tenant.SignedOn}</p>
            {tenant.withDrewOn && 
              <div>
                <p><strong>Withdrew On :</strong> {tenant.WithDrewOn}</p>
                <p><strong>Reason for withdrawal:</strong> {tenant.withDrawalReason}</p>
              </div>
            }
            <Button size='small' variant='contained' color='primary' style={{ marginBottom:'30px' }}>Sign</Button>
          </TenantCard>
        ))}
      </TwoSidedContainer>
     
      <ResponseComponent 
        message={responseMessage.message} 
        severity={responseMessage.severity}
        open={open} 
        handleClose={handleClose} 
      />
    </TwoSidedContainer>
  )
}
