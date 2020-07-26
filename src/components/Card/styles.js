import styled from 'styled-components'

export const Div = styled.div`
    display: flex;
    width: 95%;
    height: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 4px;
    padding: 2px;
    border: 0.5px solid #8a7d7c;
`;

export const Content = styled.span`
    color:  #574f4e;
    :hover{
        color: ${props => props.shouldHover ? "#4ebaae" : "none"};
        cursor: ${props => props.shouldHover ? "pointer" : "normal"};
    }
`;