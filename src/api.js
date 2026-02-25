async function getRecipes(){
   try{  const data = await fetch('https://dummyjson.com/recipes');
    const infos = await data.json();
    console.log(infos);
    
}catch(error){
    console.log("ila ya eu un problem !");
    
}
}
getRecipes();