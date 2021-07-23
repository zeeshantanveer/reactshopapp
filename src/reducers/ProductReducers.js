import {productActionTypes} from "../constants/constants";
const initialState = {
    products: []
}
export const ProductReducers = (state = initialState, {type, payload}) => {
    switch (type) {
        case productActionTypes.SET_PRODUCTS:
            return {
                ...state,
                products: payload
            };
        default:
            return state;
    }
}
export const selectedProductReducer = (state = {} , {type, payload}) => {
    switch (type) {
        case productActionTypes.SELECTED_PRODUCT:
            return {
                ...state,
                ...payload
            }
        case productActionTypes.REMOVE_PRODUCT:
            return {}
        default:
            return state;

    }
}