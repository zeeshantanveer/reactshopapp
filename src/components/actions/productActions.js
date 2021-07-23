//SET PRODUCT ACTIONS
import {productActionTypes} from "../../constants/constants";

export const setProducts = (products) => {
    return {
        type : productActionTypes.SET_PRODUCTS,
        payload: products
    }
}
export const selectedProduct = (product)=>{
    return {
        type: productActionTypes.SELECTED_PRODUCT,
        payload:product
    }
}

export const removeSelectedProduct = (product)=>{
    return {
        type: productActionTypes.REMOVE_PRODUCT,
    }
}