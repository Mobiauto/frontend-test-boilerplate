import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {getCars, getModels, getValue, getYears} from "../actions/actions";
import MenuComponent from "../components/MenuComponent";
import { connect } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
        dispatch(getCars())
  }, []);

  const cars = useSelector((state) => state)

  const [selected, setSelected] =  useState({});
  
  const getModelById = (type, id) => {
    if (type === "marca") {
      setSelected({'marca': id})
      dispatch(getModels(id));
    } else if (type === "modelo") { 
      setSelected({...selected, 'modelo': id})
      dispatch(getYears(selected["marca"], id));
    } else if (type === "ano") {
       setSelected({...selected, 'ano': id})
       dispatch(getValue(selected["marca"], selected["modelo"],  id))
    }
  }
   
    return (
      <>
        <MenuComponent onClick={(item) => console.log(item)} ></MenuComponent>
        <h2> {cars && cars["type"]}</h2>
        <span>Clique em um elemento para filtrar</span>
        <ul>
        { cars === undefined ? [] :
          cars["type"] !== "valor" && Object.keys(cars).map((item, i) => (
              <li onClick={() => getModelById(cars["type"], cars[item].codigo)} key={i}>name: {cars[item].nome} codigo: {cars[item].codigo}</li>
          ))
        }
        </ul>
        <ul>
        { cars === undefined ? [] :
          cars["type"] === "valor" && 
              <li>name: {cars.AnoModelo} CodigoFipe: {cars.CodigoFipe} Valor: {cars.Valor}</li>
        }  
        </ul>
      </>
    );
}

const mapStateToProps = ( components ) => ({
  pathname: '/',
});

export default connect(mapStateToProps)(App);
