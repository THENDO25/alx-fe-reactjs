
import React from 'react';

const RecipeDetail = ({ recipe }) => {
  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.summary}</p>
      {recipe.instructions && (
        <div>
          <h2>Instructions:</h2>
          <ol>
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default RecipeDetail;