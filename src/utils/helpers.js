import { isArray } from 'util';

export function apiToSelect(data) {
	if(!data) return null;

	if(isArray(data)) return data.map(({ nome, codigo }) => ({
		value: codigo,
		label: nome
	}));

	return {
		value: data.codigo,
		label: data.nome
	}
};

export function selected(data) {
	return data.find(({ selected }) => selected);
};

export function isEmptyObject(obj) {
	if(!obj) return false;
	return Object.keys(obj).length === 0 && obj.constructor === Object;
}