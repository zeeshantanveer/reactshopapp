import {combineReducers} from "redux";
import ContactReducer from "./ContactReducers";
import {ProductReducers, selectedProductReducer} from "./ProductReducers";

export default combineReducers({
    contact: ContactReducer,
    allproducts: ProductReducers,
    product: selectedProductReducer,
});