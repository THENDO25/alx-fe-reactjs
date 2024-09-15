import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import recipes from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    const foundRecipe = recipes.find((recipe) => recipe.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover mb-4" />
      <div className="mb-4">
        <h2 className="text-lg font-bold">Ingredients:</h2>
        <ul className="list-disc pl-4">
          {recipe.ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-lg font-bold">Cooking Instructions:</h2>
        <ol className="list-decimal pl-4">
          {recipe.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;