import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Logo = styled(Link)`
    color: black;
    text-decoration: none;
    font-size: 200%;
    
    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const DesktopNav = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;

    button {
        background: none;
        font-size: 100%;
        border: none;
    }

    a, button {
        color: black;
        text-decoration: none;
        padding: 20px 12px;
        cursor: pointer;
    }

    a { 
        &:hover {
            color: blue;
        }

        &.active {
            border-bottom: 3px solid green;
            color: green;
        }
    }

    div {
        button {
            text-decoration: none;
            padding: 10px 10px;
            cursor: pointer;
        }
    }

    @media (max-width: 1080px) {
            
    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;