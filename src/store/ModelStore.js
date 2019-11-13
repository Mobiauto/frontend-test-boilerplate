import { action, reaction } from "mobx";
import List from "./ListStore";
import axios from "axios";

export default class ModelStore extends List {
  constructor(rootStore) {
    super();    
    reaction(
      () => rootStore.brandStore.getChosenId, 
      value => {
        this.resetValues();
        axios.get('https://parallelum.com.br/fipe/api/v1/carros/marcas/' + value + '/modelos')
        .then(
          action((result) => {
            this.list = result.data.modelos;
            this.searchArray = this.list.slice();
          })
        )
      }
    );    
  }

  
}
