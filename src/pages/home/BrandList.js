import * as React from "react";
import { action } from "mobx";
import { observer } from 'mobx-react'
import { Box, TextInput, List } from "./GenericComponents";

class BrandList extends React.Component {
  
  onMouseDown = action((event) => {
    if (event.target.tagName === 'LI') {
      this.props.brandStore.setChosenId(event.target.getAttribute('data-id'));
      this.props.brandStore.setSearchQuery(event.target.textContent);
      this.props.brandStore.setDisplayValue(event.target.textContent);
      this.props.brandStore.setChosenName(event.target.textContent);
    }
  });
  
  onChange = (event) => {
    this.props.brandStore.setDisplayValue(event.target.value);
    this.props.brandStore.search(event.target.value);
  }
  
  onFocus = () => {
    this.props.brandStore.setShowList(1);
  }
  
  onBlur = () => {
    this.props.brandStore.setShowList(0);
    if (this.props.brandStore.isIdChosen) {
      this.props.brandStore.setDisplayValue(this.props.brandStore.getChosenName);
    }
  }
  
  list = () => this.props.brandStore.searchArray.map((element) => {
    return <li data-id={element.codigo} key={element.codigo}>{element.nome}</li>
  })
  
  
  render () {
    return (
      <Box>
        <h3>Marca</h3>
        <TextInput disp={this.props.brandStore.showList} onChange={this.onChange} value={this.props.brandStore.displayValue} placeholder="Selecione a marca" onFocus={this.onFocus} onBlur={this.onBlur} type="text"/>
        <List disp={this.props.brandStore.showList} onMouseDown={this.onMouseDown}>
          { this.list() }
        </List>
      </Box>
    )
  }
} 

export default observer(BrandList);
