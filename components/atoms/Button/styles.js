

import styled from 'styled-components';

export const Container = styled.button`
    width: 12em;
    height: 3em;
    background-color: ${({bg}) => bg};
    color: ${({color}) => color} !important;
    border: none;
    border-radius: 4px;
    color: black;
    transition-duration: .3s;
    cursor: pointer;

    &:hover{
        color: ${({bg}) => bg} !important;
        background-color: ${({color}) => color};
        border: 1px solid ${({bg}) => bg};

    }
`;
