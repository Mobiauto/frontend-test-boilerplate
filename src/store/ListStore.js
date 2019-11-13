import { action, observable, computed, decorate } from "mobx";
import remotedev from 'mobx-remotedev';

class List {
  constructor() {
    this.setDefaultValues();
  }
  
  setDefaultValues() {
    this.showList = 0;
    this.searchArray = [];
    this.list = [];
    this.chosenId = null;
    this.displayValue = '';
  }
  
  setShowList(value) {
    this.showList = value;
  }
  
  setDisplayValue(value) {
    this.displayValue = value;
  }
  
  setChosenId(value) {
    this.chosenId = value;
  }
  
  setChosenName(value) {
    this.chosenName = value;
  }
  
  setSearchQuery(value) {
    this.searchQuery = value;
  }
  
  get getChosenId() {
    return this.chosenId;
  }
  
  get getChosenName() {
    return this.chosenName;
  }
  
  get isIdChosen() {
    return this.chosenId !== null;
  }
  
  resetValues() {
    this.chosenId = null;
    this.list = [];
    this.searchArray = [];
    this.searchQuery = '';
    this.chosenName = '';
    this.displayValue = '';
  }
  
  search(value) {
    if (value > this.searchQuery) {
      this.searchArray = this.searchArray.filter(element => {
        return element.nome.toLowerCase().indexOf(value) !== -1 || element.nome.toUpperCase().indexOf(value) !== -1;
      })
    }
    else {
      this.searchArray = this.list.slice();
      this.searchArray = this.searchArray.filter(element => {
        return element.nome.toLowerCase().indexOf(value) !== -1 || element.nome.toUpperCase().indexOf(value) !== -1;
      })
    }
    this.searchQuery = value;
  }
  
}

export default remotedev(
  decorate(List, {
    searchArray: observable,
    searchQuery: observable,
    list: observable,
    chosenId: observable,
    chosenName: observable,
    showList: observable,
    displayValue: observable,
    getChosenId: computed,
    getChosenName: computed,
    isIdChosen: computed,
    setShowList: action,
    setDefaultValues: action,
    setDisplayValue: action,
    setChosenId: action,
    setChosenName: action,
    setSearchQuery: action,
    search: action,
    resetValues: action,
  })
) 
