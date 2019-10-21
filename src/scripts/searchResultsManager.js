//This is simply rendering the recipe results to the DOM using a string that will become HTML. "Recipe" is each recipe (object) result from the API. 

const buildRecipeHtml = recipe => `
<article>
  <h4>${recipe.title}</h4>
  <img src="${recipe.image_url}" alt="Recipe Image">
  <p>
      <a href="${recipe.source_url}">Click here to see the full recipe</a>
  </p>
</article>
`

//This is receiving as an argument the array of recipe results. Each result is an object. It's iterating through each object (recipe) and passing each object as the argument for buildRecipeHtml, then storing that string in recipeHtml. All the strings are built up and stored in recipeResultsHtml.

const displayRecipeHtml = allRecipes => {
  let recipeResultsHtml = ""
  allRecipes.forEach(recipe => {
    let recipeHtml = buildRecipeHtml(recipe)
    recipeResultsHtml += recipeHtml
  });
//THEN this is grabbing the container with class search-results and putting all the strings, each getting their interpolation values from every object, in the innerHTML, and then rendering it to the DOM. 
  const searchResultsSection = document.querySelector(".search-results")
  searchResultsSection.innerHTML = recipeResultsHtml
}
