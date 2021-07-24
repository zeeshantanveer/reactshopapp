import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {removeSelectedProduct, selectedProduct} from "../actions/productActions";
import Jumbotron from "../alements/Jumbotron";

const ProductDetail = () => {
    const product = useSelector((state) => state.product);
    const {id} = useParams();
    const dispatch = useDispatch();
    const fetchProduct = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`).catch((error) => {
            console.log("Error", error);
        });
        console.log(response.data)
        dispatch(selectedProduct(response.data));
    };
    useEffect(() => {
        if (id && id !== ''){
            fetchProduct();
        }
        return () => {
            dispatch(removeSelectedProduct());
        }
    }, [id]);
    const {title,price,category,description,image} = product;
    return (
        <>
            <Jumbotron page="Product Detail" icon="" />
            <div className="container pt-5">
                <div className="ui grid container">
                    {
                        Object.keys(product).length === 0 ? (
                            <div className="center display-6">Loading...</div>
                        ) : (
                            <div className="ui placeholder segment">
                                <div className="ui two column stackable aligned grid">
                                    <div className="ui vertical divider">AND</div>
                                    <div className="row aligned middle ">
                                        <div className="column lp">
                                            <img className="ui fluid image" src={image} alt={title}/>
                                        </div>
                                        <div className="column rp">
                                            <h1>{title}</h1>
                                            <h2><a className="ui teal tag label">${price}</a></h2>
                                            <h3 className="ui brown header block">{category}</h3>
                                            <p>{description}</p>
                                            <p>{description}</p>
                                            <p>{description}</p>
                                            <div className="ui vertical animated button" tabIndex="0">
                                                <div className="hidden content"><i className="shop icon"></i></div>
                                                <div className="visible content">Add to Cart</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default ProductDetail;
