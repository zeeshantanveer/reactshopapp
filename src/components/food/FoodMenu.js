import React, {useState, useEffect} from 'react';
import Jumbotron from "../alements/Jumbotron";
import axios from "axios";
import {Link} from "react-router-dom";
import RecipeItem from "./RecipeItem";


const FoodMenu = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const recipePerPage = 12;
    const pagesVisited = pageNumber * recipePerPage;
    const [search, setSearch] = useState("");
    const [recipes, setRecipes] = useState([]);
    const APP_ID = 'a4588225';
    const APP_KEY = 'f20273826da68d8bb2b266387b6ae47b';
    const onInputChange = (e) => {
        setSearch(e.target.value);
    }
    const getRecipes = async () => {
        let url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=4&calories=591-722`;
        if (search !== ''){
            url = `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
        }
        const response = await axios.get(url).catch((error)=> {
            console.log("ERROR", error);
        },[]);
        setRecipes(response.data.hits);
    }
    useEffect(() => {
           getRecipes();
    },[]);

    const onSearchClick = () => {
        getRecipes();
    }

    let recipeRenderList = null;
    if (Object.keys(recipes).length === 0){
        recipeRenderList = (
            <div className="text-center display-6">Loading...</div>
        );
    }else {

        recipeRenderList = recipes.map((recipe,index) => {
            return (
                    <div className="row" key={index}>
                        {
                            recipes.map((recipe) => (
                                <RecipeItem recipe={recipe.recipe} />
                            ))
                        }
                    </div>
            );
        })
    }
    return (
        <>
            <Jumbotron page="Food Recipe" icon="fastfood" search={search} searchField={true} onInputChange={onInputChange} onSearchClick={onSearchClick} />
            <div className="container pt-5">
            {
                recipeRenderList
            }
            </div>
        </>
    );
};

export default FoodMenu;
