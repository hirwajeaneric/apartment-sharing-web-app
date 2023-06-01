import { FormControl } from '@mui/material';
import styled from 'styled-components';

export const MainAppContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: #f0f5f5;
    min-height: 100vh;
    width: 100vw;

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const FullWidthContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const PageSizedContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    width: 90%;

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 800px) {
        width: 95vw;
    }

    @media (max-width: 480px) {
        width: 98vw;
    }
`;

export const CenteredFlexContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const TopLeftFlexAlignedContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const TwoSidedContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    flex-wrap: nowrap;

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        flex-wrap: wrap;
    }

    @media (max-width: 480px) {
        
    }
`;

export const LeftContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 49%;

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        width: 100%;
    }

    @media (max-width: 480px) {
        width: 100%;
    }
`;

export const RightContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 49%; 

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        width: 100%;
    }

    @media (max-width: 480px) {
        width: 100%;
    }
`;

export const ThreeSidedContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const PageWithSideBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;

    &.leftSide {
        width: 70%;
    }

    &.rightSide {
        width: 28%;
    }

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const PageDetailsContainer = styled.div`
    padding: 20px;    
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;

    h1 {

    }

    h2 {

    }

    h3 {

    }

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const HeaderOne = styled.h1`
    font-size: 300%;
    font-weight: 400;

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        font-size: 200%;
    }

    @media (max-width: 480px) {
        
    }
`;

export const HeaderTwo = styled.h2`
    font-weight: 400;

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const HeaderThree = styled.h3`

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const CustomFormControlOne = styled(FormControl)`
    width: 25%;

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        width: 100%;
    }

    @media (max-width: 480px) {
        
    }
`;

export const CustomFormControl = styled(FormControl)`

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;