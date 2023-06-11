import React from 'react'
import { Helmet } from 'react-helmet-async'
import { InnerContainer } from '../components/styled-components/authenticationPages'
import { HeaderThree, HeaderTwo } from '../components/styled-components/generalComponents'
import JoinRequestsTable from '../components/tables/JoinRequestsTable'
import { useSelector } from 'react-redux'

export default function JoinRequestList() {
  const { isLoading, listOfJoinRequestsSentByMe, listOfJoinRequestsSentToMe } = useSelector(state => state.joinRequest);

  return (
    <div>
      <Helmet>
        <title>Join requests</title>
        <meta name="description" content={`List of all join requests, both sent by me and those sent to me.`} /> 
      </Helmet>
      {
        isLoading ? 
        <p>Loading...</p> :
        <InnerContainer style={{ width: '100%', alignItems:'flex-start', margin: '0', background: 'none', borderTop: 'none' }}>
        <HeaderTwo style={{ margin: '0', borderBottom: '1px solid rgb(120,116,116, 0.5)', paddingBottom: '10px', width: '100%' }}>Join Requests</HeaderTwo>
        <HeaderThree style={{ margin: '0', paddingTop: '20px', width: '100%' }}>Recieved</HeaderThree>
        <JoinRequestsTable data={listOfJoinRequestsSentToMe} />
        <HeaderThree style={{ margin: '0', paddingTop: '20px', width: '100%' }}>Sent</HeaderThree>
        <JoinRequestsTable data={listOfJoinRequestsSentByMe} />
      </InnerContainer>
      }
    </div>
  )
}
