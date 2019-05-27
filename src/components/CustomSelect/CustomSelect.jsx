import React from 'react';
import Select from 'react-select';

const customStyles = {
	option: (provided, state) => ({
		...provided,
		color: state.isFocused ? '#fff' : state.isSelected ? '#fff' : '#3f51b6',
		backgroundColor: state.isFocused ? '#3f51b6' : state.isSelected ? '#33a29a' : '#fff'
	}),
	control: (provided, state) => ({
		...provided,
		backgroundColor: state.isDisabled ? '#ccc' : '#fff',
		borderColor: state.isDisabled ? '#ccc' : '#fff'
	})
};

const CustomSelect = props => (
	<Select
		{...props}
		styles={customStyles}
		noOptionsMessage={() => 'Sem opções 😞'}
	/>
);

export default CustomSelect;