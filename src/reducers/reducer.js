import {
    GET_BRANDS_SUCCESS,
    GET_MODELS_SUCCESS,
    GET_YEARS_SUCCESS,
    GET_VALUES_SUCCESS,
} from '../actions/action-types';

const initialState = [{}];

const apiReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_BRANDS_SUCCESS:
            return {
                ...state,
                ...action.payload.data,
                ['type']: 'marca'
            }
        case GET_MODELS_SUCCESS:
            return {
                ...action.payload.data["modelos"],
                ['type']: 'modelo'
            }
        case GET_YEARS_SUCCESS:
            return {
                ...state,
                ...action.payload.data,
                ['type']: 'ano'
            }
        case GET_VALUES_SUCCESS:
            return {
                ...state,
                ...action.payload.data,
                ['type']: 'valor'
            }
    }
}

export default apiReducer;