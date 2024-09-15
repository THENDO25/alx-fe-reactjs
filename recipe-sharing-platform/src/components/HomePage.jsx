import React, { useState, useEffect } from 'react';
import recipes from '../data.json';
import { Link } from 'react-router-dom';

<button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
  <Link to={`/recipe/${recipe.id}`}>View Recipe</Link>
</button>

const HomePage = () => {
  const [recipeData, setRecipeData] = useState([]);

  useEffect(() => {
    setRecipeData(recipes);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-4">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipeData.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-200 ease-in-out"
          >
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-bold">{recipe.title}</h2>
              <p className="text-gray-600">{recipe.summary}</p>
              <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                View Recipe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;