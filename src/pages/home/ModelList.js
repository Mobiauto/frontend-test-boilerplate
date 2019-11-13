import * as React from "react";
import { action } from "mobx";
import { observer } from 'mobx-react'
import { Box, TextInput, List } from "./GenericComponents";

class ModelList extends React.Component {
  
  onMouseDown = action((event) => {
    if (event.target.tagName === 'LI') {
      this.props.modelStore.setChosenId(event.target.getAttribute('data-id'));
      this.props.modelStore.setSearchQuery(event.target.textContent);
      this.props.modelStore.setDisplayValue(event.target.textContent);
      this.props.modelStore.setChosenName(event.target.textContent);
    }
  });
  
  onChange = (event) => {
    this.props.modelStore.setDisplayValue(event.target.value);
    this.props.modelStore.search(event.target.value);
  }
  
  onFocus = () => {
    this.props.modelStore.setShowList(1);
  }
  
  onBlur = () => {
    this.props.modelStore.setShowList(0);
    if (this.props.modelStore.isIdChosen) {
      this.props.modelStore.setDisplayValue(this.props.modelStore.getChosenName);
    }
  }

  list = () => this.props.modelStore.searchArray.map((element, index) => {
    return <li data-id={element.codigo} key={element.codigo}>{element.nome}</li>
  })
  
  render () {
    return (
      <Box>
        <h3>Modelo</h3>
        <TextInput disp={this.props.modelStore.showList} disabled={!this.props.brandStore.isIdChosen} onChange={this.onChange} value={this.props.modelStore.displayValue} placeholder="Selecione o modelo" onFocus={this.onFocus} onBlur={this.onBlur} type="text"/>
        <List disp={this.props.modelStore.showList} onMouseDown={this.onMouseDown}>
          { this.list() }
        </List>
      </Box>
    )  
  }
} 


export default observer(ModelList);
