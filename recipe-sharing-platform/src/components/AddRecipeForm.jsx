import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!title) newErrors.title = 'Title is required';
    if (!ingredients) newErrors.ingredients = 'Ingredients are required';
    if (!instructions) newErrors.instructions = 'Instructions are required';
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Submit form data to API or handle submission
      console.log({ title, ingredients, instructions });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-bold mb-2">
          Recipe Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.title && <p className="text-red-500">{errors.title}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="ingredients" className="block text-sm font-bold mb-2">
          Ingredients
        </label>
        <textarea
          id="ingredients"
          value={ingredients}
          onChange={(event) => setIngredients(event.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.ingredients && <p className="text-red-500">{errors.ingredients}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="instructions" className="block text-sm font-bold mb-2">
          Instructions
        </label>
        <textarea
          id="instructions"
          value={instructions}
          onChange={(event) => setInstructions(event.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.instructions && <p className="text-red-500">{errors.instructions}</p>}
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;