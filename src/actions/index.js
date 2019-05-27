import * as API from '../utils/api';

export const GET_BRANDS = 'GET_BRANDS';
export const GET_MODELS = 'GET_MODELS';
export const GET_YEARS = 'GET_YEARS';
export const GET_VALUE = 'GET_VALUE';

export const SELECT_BRAND = 'SELECT_BRAND';
export const SELECT_MODEL = 'SELECT_MODEL';
export const SELECT_YEAR = 'SELECT_YEAR';

export const RESET = 'RESET';

export const UPDATE_LOADING = 'UPDATE_LOADING';
export const UPDATE_SHOW_RESULT = 'UPDATE_SHOW_RESULT';

// *** BRANDS
const getBrands = (brands = []) => ({
	type: GET_BRANDS,
	brands
});

export const fetchBrands = () => async dispatch => {
	dispatch(changeLoader(true));

	const brands = await API.getBrands();

	dispatch(getBrands(brands));
	dispatch(changeLoader(false));
};

export const selectBrand = brandId => ({
	type: SELECT_BRAND,
	brand: brandId
});


// *** MODELS
const getModels = (models = []) => ({
	type: GET_MODELS,
	models
});

export const fetchModels = brandId => async dispatch => {
	dispatch(changeLoader(true));

	const data = await API.getModels(brandId);

	dispatch(getModels(data.modelos));
	dispatch(changeLoader(false));
};

export const selectModel = modelId => ({
	type: SELECT_MODEL,
	model: modelId
});


// *** YEARS
const getYears = (years = []) => ({
	type: GET_YEARS,
	years
});

export const fetchYears = (brandId, modelId) => async dispatch => {
	dispatch(changeLoader(true));

	const data = await API.getYears(brandId, modelId);

	dispatch(getYears(data));
	dispatch(changeLoader(false));
};

export const selectYear = yearId => ({
	type: SELECT_YEAR,
	year: yearId
});


// *** VALUE
const getValue = (value = {}) => ({
	type: GET_VALUE,
	value
});

export const fetchValue = (brandId, modelId, yearId) => async dispatch => {
	dispatch(changeLoader(true));

	const data = await API.getValue(brandId, modelId, yearId);

	dispatch(getValue(data));
	dispatch(changeLoader(false));
};

// *** RESET
export const resetSearch = () => dispatch => {
	dispatch(changeResult(false));
	dispatch({type: RESET});
};

// *** LOADING
export const changeLoader = (isLoading = false) => ({
	type: UPDATE_LOADING,
	isLoading
});

// *** SHOW RESULT
export const changeResult = (showResult = false) => ({
	type: UPDATE_SHOW_RESULT,
	showResult
});