import { getRecipes } from "./api.js";
 export async function displayRecipes(recipes) {
    const app = document.getElementById('app');

    app.innerHTML = '';
    for (let i=0 ;i<recipes.length;i++) {
         const recipe =recipes[i];
        const carte = document.createElement("div");
        carte.classList.add("recipe-card");

         carte.innerHTML = `
         <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
        <h2>${recipe.name}</h2>
        <p>${recipe.description}</p>
        <p>Temps de cuisson: ${recipe.cookingTime} min</p>
    `;
        app.appendChild(carte);
    };

}
getRecipes(displayRecipes);