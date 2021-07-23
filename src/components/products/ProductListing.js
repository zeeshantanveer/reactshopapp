import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const ProductListing = () => {
    const products = useSelector((state) => state.allproducts.products);
    console.log(products)
    const productRenderList = products.map((product) => {
        const {id,image,title,price,category} = product;
        return (
            <div></div>
        );
    });
    return (<>
            {productRenderList}
        </>
    );
};

export default ProductListing;
