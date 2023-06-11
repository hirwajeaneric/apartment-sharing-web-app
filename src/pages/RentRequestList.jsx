import React from 'react'
import { Helmet } from 'react-helmet-async'
import { InnerContainer } from '../components/styled-components/authenticationPages'
import { HeaderThree, HeaderTwo } from '../components/styled-components/generalComponents'
import RentRequestsTable from '../components/tables/RentRequestsTable'
import { useSelector } from 'react-redux'

export default function RentRequestList() {
  const { isLoading, listOfRentRequestsSentByMe, listOfRentRequestsSentToMe } = useSelector(state => state.rentRequest);

  return (
    <div>
      <Helmet>
        <title>Rent requests</title>
        <meta name="description" content={`List of all rent requests, both sent by me and those sent to me.`} /> 
      </Helmet>
      {
        isLoading ? 
        <p>Loading...</p> :
        <InnerContainer style={{ width: '100%', alignItems:'flex-start', margin: '0', background: 'none', borderTop: 'none' }}>
        <HeaderTwo style={{ margin: '0', borderBottom: '1px solid rgb(120,116,116, 0.5)', paddingBottom: '10px', width: '100%' }}>Rent Requests</HeaderTwo>
        <HeaderThree style={{ margin: '0', paddingTop: '20px', width: '100%' }}>Recieved</HeaderThree>
        <RentRequestsTable data={listOfRentRequestsSentToMe} />
        <HeaderThree style={{ margin: '0', paddingTop: '20px', width: '100%' }}>Sent</HeaderThree>
        <RentRequestsTable data={listOfRentRequestsSentByMe} />
      </InnerContainer>
      }
    </div>
  )
}
