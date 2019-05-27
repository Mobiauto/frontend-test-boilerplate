const BASE_URL = 'https://parallelum.com.br/fipe/api/v1/carros';

const headers = {
	'Accept': 'application/json'
}

const getFetch = async (endpoint = '') => {
	try {
		const res = await fetch(`${BASE_URL}${endpoint}`, {headers});
		const data = await res.json();

		return data;
	} catch(e) {
		throw new Error(e);
	}
};

export const getBrands = () => getFetch(`/marcas`);
export const getModels = brandId => getFetch(`/marcas/${brandId}/modelos`);
export const getYears = (brandId, modelId) => getFetch(`/marcas/${brandId}/modelos/${modelId}/anos`);
export const getValue = (brandId, modelId, yearId) => getFetch(`/marcas/${brandId}/modelos/${modelId}/anos/${yearId}`);