import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Product from "./Product";
import axios from "axios";
import {setProducts} from "../actions/productActions";
import Jumbotron from "../alements/Jumbotron";

const Products = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch((error) => {
            console.log('Error',error);
        });
        dispatch(setProducts(response.data));
    };
    useEffect(()=>{
        fetchProducts();
    },[]);
    return (
        <>
            <Jumbotron page="Shop" icon="restaurant" />
            <div className="ui grid container pt-5">
                <Product />
            </div>
        </>
    );
};

export default Products;
