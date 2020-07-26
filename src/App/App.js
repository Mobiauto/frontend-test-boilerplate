import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {getCars, getModels, getValue, getYears} from "../actions/actions";
import Card from "../components/Card";
import Header from "../components/Header";

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
        <Header type={cars && cars["type"]} onClick={() => dispatch(getCars())}/>
        { cars === undefined ? [] :
          cars["type"] !== "valor" && cars && Object.keys(cars["cars"]).map((item, i) => (
              <Card isValue onClick={() => getModelById(cars["type"], cars["cars"][i].codigo)} brand={cars["cars"][i].nome} code={cars["cars"][i].codigo} key={i} />
          ))
        }
        { cars === undefined ? [] :
          cars["type"] === "valor" && 
            <Card year={cars["cars"].AnoModelo} code={cars["cars"].CodigoFipe} value={cars["cars"].Valor} brand={cars["cars"].Marca} model={cars["cars"].Modelo}/>
        }  
      </>
    );
}

export default App;
