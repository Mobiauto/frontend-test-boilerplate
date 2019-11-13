import List from "./ListStore";
import { action, reaction } from "mobx";
import axios from "axios";

export default class YearStore extends List {
  constructor(rootStore) {
    super();
    this.setDefaultValues();
    
    reaction(
      () => rootStore.modelStore.getChosenId, 
      value => {
        this.resetValues();
        if (value !== null) {
          axios.get('https://parallelum.com.br/fipe/api/v1/carros/marcas/' + rootStore.brandStore.getChosenId + '/modelos/' + rootStore.modelStore.getChosenId + '/anos')
          .then(
            action((result) => {
              this.list = result.data;
              this.searchArray = this.list.slice();
            })
          )
        }
      }
    );    
  }
  
}

