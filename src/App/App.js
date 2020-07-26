import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {getCars, getModels, getValue, getYears} from "../actions/actions";
import MenuComponent from "../components/MenuComponent";
import Component from "../components/Component";
import { connect } from "react-redux";

const App = ({ location, pathname, components }) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
        dispatch(getCars())
  }, []);

  const cars = useSelector((state) => state)

  console.log("aa", cars)
   
    return (
      <>
        <MenuComponent onClick={(item) => console.log(item)} ></MenuComponent>
        <h2> {cars && cars["type"]}</h2>
        <ul>
        { cars === undefined ? [] :
          Object.keys(cars).map((item, i) => (
              <li key={i}>name: {cars[item].nome} codigo: {cars[item].codigo}</li>
          ))
        }  
        </ul>
      </>
    );
}

const mapStateToProps = ( components ) => ({
  pathname: '/',
});

export default connect(mapStateToProps)(App);
