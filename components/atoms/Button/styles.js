

import styled from 'styled-components';

export const Container = styled.button`
    width: 12em;
    height: 3em;
    background-color: ${({bg}) => bg};
    color: ${({color}) => color};
    border: none;
`;
