import {
    GET_BRANDS,
    GET_BRANDS_SUCCESS,
    GET_BRANDS_FAIL,
    GET_MODELS,
    GET_MODELS_SUCCESS,
    GET_MODELS_FAIL,
    GET_YEARS,
    GET_YEARS_SUCCESS,
    GET_YEARS_FAIL,
    GET_VALUES,
    GET_VALUES_SUCCESS,
    GET_VALUES_FAIL
} from './action-types';

const url = 'https://parallelum.com.br/fipe/api/v1/carros/'

export const getCars = () => dispatch => {
    dispatch({
        type: GET_BRANDS,
        payload: {
            client: '',
            request: {
                method: 'GET',
                url: url+'marcas',
            },
            options: {
                onSuccess: ({ response }) => {
                    dispatch({
                        type: GET_BRANDS_SUCCESS,
                        payload: {
                            data: response.data,
                            status: response.status
                        }
                    })
                },
                onError: () => {
                    dispatch({
                        type: GET_BRANDS_FAIL
                    })
                }
            }
            
        }
    })
}

export const getModels = (brand) => dispatch => {
    dispatch({
        type: GET_MODELS,
        payload: {
            client: '',
            request: {
                method: 'GET',
                url: url+ "/marcas/" + brand + '/modelos',
            },
            options: {
                onSuccess: ({ response }) => {
                    dispatch({
                        type: GET_MODELS_SUCCESS,
                        payload: {
                            data: response.data,
                            status: response.status
                        }
                    })
                },
                onError: () => {
                    dispatch({
                        type: GET_MODELS_FAIL
                    })
                }
            }
            
        }
    })
}

export const getYears = (brand, model) => dispatch => {
    dispatch({
        type: GET_YEARS,
        payload: {
            client: '',
            request: {
                method: 'GET',
                url:  url+ "/marcas/" + brand + '/modelos/' + model + '/years' ,
            },
            options: {
                onSuccess: ({ response }) => {
                    dispatch({
                        type: GET_YEARS_SUCCESS,
                        payload: {
                            data: response.data,
                            status: response.status
                        }
                    })
                },
                onError: () => {
                    dispatch({
                        type: GET_YEARS_FAIL
                    })
                }
            }
            
        }
    })
}

export const getValue = (brand, model, codigo) => dispatch => {
    dispatch({
        type: GET_VALUES,
        payload: {
            client: '',
            request: {
                method: 'GET',
                url:  url+ "/marcas/" + brand + '/modelos/' + model + '/years' + codigo,
            },
            options: {
                onSuccess: ({ response }) => {
                    dispatch({
                        type: GET_VALUES_SUCCESS,
                        payload: {
                            data: response.data,
                            status: response.status
                        }
                    })
                },
                onError: () => {
                    dispatch({
                        type: GET_VALUES_FAIL
                    })
                }
            }
            
        }
    })
}