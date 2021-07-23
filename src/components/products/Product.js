import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Product = () => {
    const products = useSelector((state) => state.allproducts.products);
    let productRenderList = null;
    if (Object.keys(products).length === 0){
        productRenderList = (
            <div className="center display-6">Loading...</div>
        );
    }else {
        productRenderList = products.map((product) => {
            const {id,image,title,price,category} = product;
            return (
                <div className="four wide column grid" key={id}>
                    <Link to={`/shop/product/${id}`}>
                        <div className="ui link cards">
                            <div className="card">
                                <div className="ui image">
                                    <img className="ui massive" src={image} alt={title}/>
                                </div>
                                <div className="content">
                                    <div className="header">{title}</div>
                                    <div className="meta price">${price}</div>
                                    <div className="meta description">{category}</div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            );
        });
    }
    return (<>
        {productRenderList}
        </>
    );
};

export default Product;
