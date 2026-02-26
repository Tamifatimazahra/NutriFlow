// import { getRecipes } from "./api.js";


 export function displayRecipes(recipes) {
    console.log(recipes);
    
    const app = document.getElementById('app');

    app.innerHTML = '';
    for (let i=0 ;i<recipes.length;i++) {
         const recipe =recipes[i];
        const carte = document.createElement("div");
        carte.classList.add("recipe-card");

         carte.innerHTML = `
         <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
        <h2>${recipe.name}</h2>
        <p>Duree: ${recipe.cookTimeMinutes} min</p>
    `;
        app.appendChild(carte);
    };

}
export async function getRecipes() {
    try {
        const data = await fetch('https://dummyjson.com/recipes');
        const infos = await data.json();
        console.log(infos);
        displayRecipes(infos.recipes)
        
    } catch (error) {
        console.error(error);
    }
}
getRecipes() 
// getRecipes(recList);