import styled from 'styled-components';


export const Container = styled.input`
    width: 12em;
    height: 3em;
    color: ${({color}) => color};
    background-color: ${({bg}) => bg};
    border-radius: 4px;
`;
