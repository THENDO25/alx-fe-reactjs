import { create } from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  favorites: [],
  addRecipe: (recipe) => set(state => ({ recipes: [...state.recipes, recipe] })),
  setRecipes: (recipes) => set({ recipes }),
  addFavorite: (recipeId) => set(state => ({ favorites: [...state.favorites, recipeId] })),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  recommendations: [],
  generateRecommendations: () => set(state => {
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    state.recommendations = recommended;
  }),
}));

export { useRecipeStore };