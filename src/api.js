 export async function getRecipes(){
   try{  
    const data = await fetch('https://dummyjson.com/recipes');
    const infos = await data.json();
    console.log(infos);
    
}catch(error){
    console.log("ila ya eu un problem !");
    
}
}
getRecipes();

function  displayRecipes(recipes) {
    const carte=document.createElement("div");
    carte.className="recipe-card";

    Card.innerHtml=`
    <h2>${recipe.name}</h2>
      <p>${recipe.description}</p>
      <p>Temps de cuisson: ${recipe.cookingTime} min</p>
      <button class="close-btn">Fermer</button>
    `;

}