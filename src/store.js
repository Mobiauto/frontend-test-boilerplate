import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import axios from 'axios';
import thunk from "redux-thunk";
import axiosMiddleware from 'redux-axios-middleware';
import apiReducer from "./reducers/reducer";

const client = axios.create({
    baseURL: 'https://parallelum.com.br/fipe/api/v1/carros',
    responseType: 'json'
  })
  
  const middlewares = applyMiddleware(thunk, axiosMiddleware(client));
  const enhancers = composeWithDevTools(middlewares);
  
  export default createStore(apiReducer, enhancers);
  