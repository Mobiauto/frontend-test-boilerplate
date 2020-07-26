import React from "react";
import { Div, Span, OutterDiv, Img } from './styles'

const Header = ({ type, onClick }) => {
  
  return (
    <>
    <OutterDiv >
      <Div>
        <Img src="mobiauto.png"></Img>
        {type && type !== "valor" && 
          <Span>Clique na lista para filtrar por {type}</Span>
        }
        <Span shouldHover onClick={onClick}>Limpar Filtro </Span>
      </Div>
    </OutterDiv>
    </>
  );
}

export default Header;
