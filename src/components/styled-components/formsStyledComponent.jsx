import styled from "styled-components";

export const SearchFromContainer = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    width: 100%;

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        flex-wrap: wrap;
        button {
            width: 100%;
            margin-top: 20px;
        }
    }

    @media (max-width: 480px) {
        
    }
`;

export const x = styled.div`
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