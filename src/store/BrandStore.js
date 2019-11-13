import { action } from "mobx";
import List from "./ListStore";
import axios from "axios";

export default class BrandStore extends List {
  constructor() {
    super()
    this.getBrandList();
  }
  
  getBrandList() {
    axios.get('https://parallelum.com.br/fipe/api/v1/carros/marcas')
    .then(
      action((result) => {
        this.list = result.data;
        this.searchArray = this.list.slice();
      })
    );    
  }
  
}
