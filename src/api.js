
import { displayRecipes } from "./main.js";
export async function getRecipes(displayRecipes) {
    try {
        const data = await fetch('https://dummyjson.com/recipes');
        const infos = await data.json();
        console.log(infos);
        return infos.recipes;
        
    } catch (error) {
        console.error(error);
    displayRecipes([]);

    }
}


