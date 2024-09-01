import React from 'react';
import { useRecipeStore } from '../recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const { recipes, addFavorite, removeFavorite, generateRecommendations } = useRecipeStore();

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>
            <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
            {recipe.name}
            <button onClick={() => addFavorite(recipe.id)}>Add to Favorites</button>
            <button onClick={() => removeFavorite(recipe.id)}>Remove from Favorites</button>
          </li>
        ))}
      </ul>
      <button onClick={generateRecommendations}>Generate Recommendations</button>
    </div>
  );
};

export default RecipeList;