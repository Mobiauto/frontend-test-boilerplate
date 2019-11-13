import { action, observable, decorate, reaction } from "mobx";
import remotedev from 'mobx-remotedev'
import axios from "axios";

class ResultStore {
  constructor(rootStore) {
    this.setDefaultValues();
    
    reaction(
      () => rootStore.yearStore.getChosenId, 
      value => {
        this.resetResults();
        if (value !== null ) {
          axios.get('https://parallelum.com.br/fipe/api/v1/carros/marcas/' + rootStore.brandStore.getChosenId + '/modelos/' + rootStore.modelStore.getChosenId + '/anos/' + value)
          .then(
            action((result) => {
              this.results = result.data;
            })
          )
        }
      }
    );    
  }
  
  setDefaultValues() {
    this.displayResults = 0;
    this.results = {};
  }
  
  setDisplayResults(value) {
    this.displayResults = value;
  }
  
  resetResults() {
    this.results = {};
  }
  
}

export default remotedev(
  decorate(ResultStore, {
    results: observable,
    displayResults: observable,
    setDefaultValues: action,
    setDisplayResults: action,
    resetResults: action,
  })
)
