import React, {setState} from "react";
import { Div, Content } from './styles'

const Card = ({ isValue, code, value, brand, model, year, onClick}) => {
  
  return (
    <Div id={code} onClick={onClick}>
      <Content shouldHover={isValue}>{brand}</Content>
      <Content shouldHover={isValue}>{value}</Content>
      {model && year &&
        <>
        <Content shouldHover={isValue}>{brand}</Content>
        <Content shouldHover={isValue}>{model}</Content>
        <Content shouldHover={isValue}>{year}</Content>
        </>
      }
    </Div>
  );
}

export default Card;
