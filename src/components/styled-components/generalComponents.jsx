import { Card, FormControl } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
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
    width: 100%;

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
    width: 46%;

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
    width: 46%;

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
    flex-wrap: wrap;

    div.leftSide {
        width: 70%;
    }

    div.rightSide {
        width: 28%;
    }

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        gap: 20px;
        div.leftSide {
            width: 100%;
        }

        div.rightSide {
            width: 100%;
        }
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

export const CustomPropertyCard = styled(Card)`
    height: 100%; 
    display: flex; 
    flex-direction: column;
    width: 100%;

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {

    }

    @media (max-width: 480px) {
    
    }
`;

export const CustomCarousel = styled(Carousel)`
    width: 100%; 
    margin-bottom: 70px;

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        margin-bottom: 50px;
    }

    @media (max-width: 480px) {
    }
`;

export const PropertyDetailsStyles = styled.div`
    padding: 20px; 
    background: #90CAF9; 
    width: 100%; 
    display: flex; 
    flex-direction: row; 
    flex-wrap: wrap; 
    justify-content: space-between; 
    gap: 20px;
    align-items: flex-start;
    // margin-top: 40px;

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        // margin-top: 40px;
    }

    @media (max-width: 480px) {
        
    }
`;

export const PropertyDescriptionSection = styled.div`
    width: 100%; 
    display: flex; 
    flex-direction: column; 
    flex-wrap: nowrap; 
    justify-content: flex-start; 
    gap: 20px;
    align-items: flex-start;
    margin-bottom: 60px;

    h2 {
        padding-bottom: 20px;
        width: 100%;
        border-bottom: 1px solid gray;
    }

    p {
        line-height: 23px;
    }

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        margin-bottom: 40px;
    }

    @media (max-width: 480px) {
        margin-bottom: 30px;
    }
`;

export const MapContainer = styled.div`
    width: 100%; 
    height: 400px;
    margin: 40px 0;
    border: 1px solid black;

    iframe {
        width: 100%;
        height: 100%;
    }

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        height: 300px;
        margin: 40px 0;
    }

    @media (max-width: 480px) {
        height: 200px;
        margin: 20px 0;
    }
`;