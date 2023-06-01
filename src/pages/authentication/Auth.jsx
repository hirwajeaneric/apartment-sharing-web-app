import React from 'react'
import { Outlet } from 'react-router-dom'
import { FullWidthContainer, PageSizedContainer, TwoSidedContainer } from '../../components/styled-components/generalComponents'

export default function Auth() {
  return (
    <FullWidthContainer>
        <PageSizedContainer>
            <TwoSidedContainer>
                <div>Authentication page</div>
                <Outlet />
            </TwoSidedContainer>
        </PageSizedContainer>
    </FullWidthContainer>
  )
}
