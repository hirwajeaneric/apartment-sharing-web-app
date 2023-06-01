import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import GlobalStyles from './globalStyles';
import Main from './pages/Main';
import Home from './pages/Home';
import PropertyDetailsHome from './pages/PropertyDetailsHome';
import UserAccount from './pages/UserAccount';
import Contracts from './pages/Contracts';
import UserAccountHome from './pages/UserAccountHome';
import RentedProperties from './pages/RentedProperties';
import UserAccountSettings from './pages/UserAccountSettings';
import OwnedProperties from './pages/OwnedProperties';
import RentRequestList from './pages/RentRequestList';
import JoinRequestList from './pages/JoinRequestList';
import ListOfTenants from './pages/ListOfTenants';
import PropertyDetailsUserAccount from './pages/ProperyDetailsUserAccount';
import ContractDetails from './pages/ContractDetails';
import RentRequestDetails from './pages/RentRequestDetails';
import JoinRequestDetails from './pages/JoinRequestDetails';
import ReportPreview from './pages/ReportPreview';
import TenantInfo from './pages/TenantInfo';
import ErrorPage from './pages/ErrorPage';
import PostProperty from './pages/PostProperty';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import ResetPassword from './pages/ResetPassword';
import RequestPasswordReset from './pages/RequestPasswordReset';

function App() {
  return (
    <>
      <GlobalStyles />

      <BrowserRouter>
        <Routes>
          {/* Unrestricted Routes  */}
          <Route path='/' element={<Main />}>
            <Route path='*' element={<ErrorPage />} />
            <Route path='' element={<Home />} />
            <Route path='property/:id' element={<PropertyDetailsHome />} />
            
            <Route path='signin' element={<Signin />} />
            <Route path='signup' element={<Signup />} />
            <Route path='reset-password' element={<ResetPassword />} />
            <Route path='forgot-password' element={<RequestPasswordReset />} />

            {/* Unrestricted Routes  */}
            <Route path='post' element={localStorage.getItem(`usrTkn`) ? <PostProperty /> : <Navigate replace to='/signin' />} />
            <Route path='user/:fullName' element={localStorage.getItem(`usrTkn`) ? <UserAccount /> : <Navigate replace to='/signin' />} >
              <Route path='' element={<UserAccountHome />} />
              <Route path='contracts' element={<Contracts />} />
              <Route path='settings' element={<UserAccountSettings />} />
              <Route path='rented-properties' element={<RentedProperties />} />
              <Route path='owned-properties' element={<OwnedProperties />} />
              <Route path='rent-requests' element={<RentRequestList />} />
              <Route path='join-requests' element={<JoinRequestList />} />
              <Route path='tenants' element={<ListOfTenants />} />
              <Route path='report-preview' element={<ReportPreview />} />
              <Route path='property/:propertyId' element={<PropertyDetailsUserAccount />} />
              <Route path='contract/:contractId' element={<ContractDetails />} />
              <Route path='rent-request/:rentRequestId/:number' element={<RentRequestDetails />} />
              <Route path='join-request/:joinRequestId/:number' element={<JoinRequestDetails />} />
              <Route path='tenant/:tenantId' element={<TenantInfo />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
