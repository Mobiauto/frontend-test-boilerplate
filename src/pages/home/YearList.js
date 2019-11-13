import * as React from "react";
import { action } from "mobx";
import { observer } from 'mobx-react'
import { Box, TextInput, List } from "./GenericComponents";

class YearList extends React.Component {
  
  onMouseDown = action((event) => {
    if (event.target.tagName === 'LI') {
      this.props.yearStore.setChosenId(event.target.getAttribute('data-id'));
      this.props.yearStore.setSearchQuery(event.target.textContent);
      this.props.yearStore.setDisplayValue(event.target.textContent);
      this.props.yearStore.setChosenName(event.target.textContent);
    }
  });
  
  onChange = (event) => {
    this.props.yearStore.setDisplayValue(event.target.value);
    this.props.yearStore.search(event.target.value);
  }
  
  onFocus = () => {
    this.props.yearStore.setShowList(1);
  }
  
  onBlur = () => {
    this.props.yearStore.setShowList(0);
    if (this.props.yearStore.isIdChosen) {
      this.props.yearStore.setDisplayValue(this.props.yearStore.getChosenName);
    }
  }

  list = () => this.props.yearStore.searchArray.map((element, index) => {
    return <li data-id={element.codigo} key={element.codigo}>{element.nome}</li>
  })
  
  render () {
    return (
      <Box>
        <h3>Ano</h3>
        <TextInput disp={this.props.yearStore.showList} disabled={!this.props.modelStore.isIdChosen} onChange={this.onChange} value={this.props.yearStore.displayValue} placeholder="Selecione o ano" onFocus={this.onFocus} onBlur={this.onBlur} type="text"/>
        <List disp={this.props.yearStore.showList} onMouseDown={this.onMouseDown}>
          { this.list() }
        </List>
      </Box>
    )  
  }
} 


export default observer(YearList);
