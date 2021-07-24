import React from 'react';
import {Link} from "react-router-dom";

const RecipeItem = (props) => {

    const {url,image,label,ingredientLines} = props.recipe;

    return (
        <div className="col-md-3">
            <div className="card py-2 text-center">
                <Link to={{pathname: url}} target="_blank" rel='noopener noreferrer'>
                    <img src={image} alt={label} className="img-fluid w-50 mx-auto rounded-circle" />
                    <div className="card-body">
                        <h4>{label}</h4>
                    </div>
                </Link>
                <ul className="list-group list-group-flush">
                    {
                        ingredientLines.map(ingredientLine => (
                            <li className="list-group-item">{ingredientLine}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default RecipeItem;
