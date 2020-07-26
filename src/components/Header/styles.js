import styled from 'styled-components';

export const OutterDiv = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    justify-content: center;
    align-items: center;
    margin: 4px;
    padding: 2px;
`;

export const Div = styled.div `
    display: flex;
    width: inherit;
    justify-content: center;
    align-items: center;
`;

export const Img = styled.img`
    width: 20px;
    height: 20px;
    padding: 3px;
    margin-right: 15px;
`;

export const Span = styled.span`
    width: auto;
    height: 20px;
    font-size: 15px;
    font-family: "Times New Roman", Times, sans-serif;
    padding: 8px;
    margin: 1px 4px;
    :hover {
        color: ${props => props.shouldHover ? "#4ebaae" : "none"};
        cursor: ${props => props.shouldHover ? "pointer" : "normal"};
    }
`;