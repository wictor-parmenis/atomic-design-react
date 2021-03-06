import styled from 'styled-components';

export const Container = styled.div`
    width: 720px;
    height: 10em;
    background-color: ${({bg}) => bg};
    color: ${({color}) => color};
    padding: 1em;
    border-radius: 8px;
    font-size: 1.2em;
    margin: 4em;
`;
