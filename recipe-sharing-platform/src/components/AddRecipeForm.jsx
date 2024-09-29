import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [instructions, setInstructions] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!title) newErrors.title = 'Title is required';
    if (!ingredients) newErrors.ingredients = 'Ingredients are required';
    if (!steps) newErrors.steps = 'Steps are required';
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
      console.log({ title, ingredients, steps, instructions });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10"
    >
      <div className="mb-4 md:mb-6">
        <label
          htmlFor="title"
          className="block text-sm font-bold mb-2 md:text-base"
        >
          Recipe Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
        />
        {errors.title && <p className="text-red-500">{errors.title}</p>}
      </div>
      <div className="mb-4 md:mb-6">
        <label
          htmlFor="ingredients"
          className="block text-sm font-bold mb-2 md:text-base"
        >
          Ingredients
        </label>
        <textarea
          id="ingredients"
          value={ingredients}
          onChange={(event) => setIngredients(event.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
        />
        {errors.ingredients && <p className="text-red-500">{errors.ingredients}</p>}
      </div>
      <div className="mb-4 md:mb-6">
        <label
          htmlFor="steps"
          className="block text-sm font-bold mb-2 md:text-base"
        >
          Steps
        </label>
        <input
          type="number"
          id="steps"
          value={steps}
          onChange={(event) => setSteps(event.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
        />
        {errors.steps && <p className="text-red-500">{errors.steps}</p>}
      </div>
      <div className="mb-4 md:mb-6">
        <label
          htmlFor="instructions"
          className="block text-sm font-bold mb-2 md:text-base"
        >
          Instructions
        </label>
        <textarea
          id="instructions"
          value={instructions}
          onChange={(event) => setInstructions(event.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline md:w-3/4"
        />
        {errors.instructions && <p className="text-red-500">{errors.instructions}</p>}
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:w-1/2"
      >
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;