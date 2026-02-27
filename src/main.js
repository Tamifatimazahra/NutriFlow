// import { getRecipes } from "./api.js";


 export function displayRecipes(recipes) {
    console.log(recipes);
    
    const app = document.getElementById('app');

    app.innerHTML = '';
    for (let i=0 ;i<recipes.length;i++) {
         const recipe =recipes[i];
        const carte = document.createElement("div");
        carte.classList.add("recipe-card");


        const calories=recipe.caloriesPerServing;
        let badgeColor="";

        if(calories<400){
            badgeColor="green";
        } else if (calories<=800){
            badgeColor="orange";
        }else{
            badgeColor="red"
        }
         carte.innerHTML = `
         <img class="recipe-card-img" src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
        <h2 class="recipe-card-name">${recipe.name}</h2>
       
        <p class="recipe-card-cookTimeMinutes">  🕛 ${recipe.cookTimeMinutes} min</p>
        <span class="badge" style="color:${badgeColor}">
  ${recipe.caloriesPerServing} kcal
</span>

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

const search=document.getElementById('recherche')
