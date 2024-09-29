import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';

const RecipeDetail = () => {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const recipeData = data.find((recipe) => recipe.id === parseInt(id));
    setRecipe(recipeData);
  }, [id]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {recipe && (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
            <h2 className="text-lg font-bold mb-2">Ingredients:</h2>
            <ul className="list-disc pl-4">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-600">{ingredient}</li>
              ))}
            </ul>
            <h2 className="text-lg font-bold mb-2">Instructions:</h2>
            <ol className="list-decimal pl-4">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="text-gray-600">{instruction}</li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeDetail;