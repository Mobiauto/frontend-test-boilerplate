import styled, { createGlobalStyle } from "styled-components";

export const Box = styled.div`
  @media (min-width: 1024px) {
    display: inline-block;
  }
  @media (max-width: 1023px) {
    display: block;
  }
  vertical-align: top;
  margin: 10px;
`
export const ResultsBox = styled(Box)`
  ul {
    padding: 5px;
  }
`

export const TextInput = styled.input`
  &[type=text] {
    cursor: ${props => props.disabled ? "default" : "pointer" };
    width: 180px;
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 10px;
    border-bottom-left-radius: ${props => props.disp ? "0" : "10px" };
    border-bottom-right-radius: ${props => props.disp ? "0" : "10px" };
    display: inline-block;
    outline: none;
    padding: 5px;
  }
`

export const List = styled.ul`
  height: 100px;
  display: ${props => props.disp ? "block" : "none" };
  width: 190px;
  overflow-x: hidden;
  border: 1px solid #ccc;
  border-top: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: #fff;
  
  li {
    cursor: pointer;
    padding: 5px;
  }
  
  li:hover, li:active {
    background-color: #e8e8e8;
  }
`;
 
export const Global = createGlobalStyle`
  #root, html, body {
    height: 100%;
  }
  body {
    font-family: sans-serif;
    margin: 0;
    text-align: center;
  }
`;




export const MainContainer = styled.div`
  text-align: initial;
  margin: auto;
  height: 100%;
  padding: 20px;
  display: inline-block;
`;

