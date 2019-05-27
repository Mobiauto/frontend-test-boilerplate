import { combineReducers } from 'redux';

import {
	GET_BRANDS,
	GET_MODELS,
	GET_YEARS,
	GET_VALUE,

	SELECT_BRAND,
	SELECT_MODEL,
	SELECT_YEAR,

	RESET,

	UPDATE_LOADING,
	UPDATE_SHOW_RESULT,
} from '../actions';

const selectSetState = (state, actionValue) => state.map(data => {
	if(data.codigo === actionValue) return {
		...data,
		selected: true
	}

	return {
		...data,
		selected: false
	};
});

const initialState = {
	brands: [],
	models: [],
	years: [],
	value: {}
}

const cars = (state = initialState, action) => {
	switch(action.type) {
		/* BRANDS CASES */
		case GET_BRANDS:
			return {
				...state,
				brands: action.brands
			};

		case SELECT_BRAND:
			const newBrandState = selectSetState(state.brands, action.brand);
			return {
				...state,
				brands: newBrandState
			};

		/* MODELS CASES */
		case GET_MODELS:
			return {
				...state,
				models: action.models
			};

		case SELECT_MODEL:
			const newModelState = selectSetState(state.models, action.model);
			return {
				...state,
				models: newModelState
			};

		/* YEARS CASES */
		case GET_YEARS:
			return {
				...state,
				years: action.years
			};

		case SELECT_YEAR:
			const newYearState = selectSetState(state.years, action.year);
			return {
				...state,
				years: newYearState
			};

		/* VALUE CASES */
		case GET_VALUE:
			return {
				...state,
				value: action.value
			};

		/* RESET CASES */
		case RESET:
			return {
				...initialState,
				brands: state.brands.map(brand => ({...brand, selected: false}))
			}

		default:
			return state;
	}
};

const isLoading = (state = false, action) => {
	switch(action.type) {
		case UPDATE_LOADING:
			return action.isLoading;
		default:
			return state;
	}
};

const showResult = (state = false, action) => {
	switch(action.type) {
		case UPDATE_SHOW_RESULT:
			return action.showResult;
		default:
			return state;
	}
};

export default combineReducers({
	cars,
	isLoading,
	showResult
});