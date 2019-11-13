import * as React from "react";
import { observer } from 'mobx-react'
import { ResultsBox } from "./GenericComponents";

class Results extends React.Component {

  list = () => {
    return (
      <React.Fragment>
        <ul>
          <li> { "Valor: " + this.props.resultStore.results.Valor } </li>
          <li> { "Marca: " + this.props.resultStore.results.Marca } </li>
          <li> { "Modelo: " + this.props.resultStore.results.Modelo } </li>
          <li> { "Ano Modelo: " + this.props.resultStore.results.AnoModelo } </li>
          <li> { "Combustível: " + this.props.resultStore.results.Combustivel } </li>
          <li> { "Código FIPE: " + this.props.resultStore.results.CodigoFipe } </li>
          <li> { "Mês de referência: " + this.props.resultStore.results.MesReferencia } </li>
          <li> { "Tipo de veículo: " + this.props.resultStore.results.TipoVeiculo } </li>
          <li> { "Sigla combustivel: " + this.props.resultStore.results.SiglaCombustivel } </li>
        </ul>
      </React.Fragment>
    )
  }  
  
  render() {
    return (
      <ResultsBox>
          { typeof this.props.resultStore.results.Valor !== "undefined" ? this.list() : null }
      </ResultsBox>
    )  
  }
  

}


export default observer(Results);
