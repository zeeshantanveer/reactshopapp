import React, {useState, useEffect} from 'react';
import Jumbotron from "../alements/Jumbotron";
import axios from "axios";
import {Link} from "react-router-dom";


const FoodMenu = () => {
    const [search, setSearch] = useState("");
    const [recipes, setRecipes] = useState([]);
    const APP_ID = 'a4588225';
    const APP_KEY = 'f20273826da68d8bb2b266387b6ae47b';
    const onInputChange = (e) => {
        setSearch(e.target.value);
    }
    const getRecipes = async () => {
        const response = await axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`).catch((error)=> {
            console.log("ERROR", error);
        },[]);
        setRecipes(response.data.hits);
    }
    useEffect(() => {
        if (search !== ''){
          //  getRecipes();
        }
    },[]);

    const onSearchClick = () => {
        getRecipes();
    }

    let recipeRenderList = null;
    if (Object.keys(recipes).length === 0){
        recipeRenderList = (
            <div className="center display-6">Loading...</div>
        );
    }else {
        console.log(recipes);
        recipeRenderList = recipes.map((recipe,index) => {
            return (
                <div className="container pt-5">
                    <div className="row" key={index}>
                        {
                            recipes.map((recipe) => (
                                <div className="col-md-3">
                                    <div className="card py-2 text-center">
                                        <img src={recipe.recipe.image} alt={recipe.recipe.label} className="img-fluid w-50 mx-auto rounded-circle" />
                                        <div className="card-body">
                                            <h4>{recipe.recipe.label}</h4>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            {
                                                recipe.recipe.ingredientLines.map(ingredientLine => (
                                                    <li className="list-group-item">{ingredientLine}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            );
        });
    }
    return (
        <>
            <Jumbotron page="Food Recipe" icon="fastfood" search={search} searchField={true} onInputChange={onInputChange} onSearchClick={onSearchClick} />
            {
                recipeRenderList
            }
        </>
    );
};

export default FoodMenu;
