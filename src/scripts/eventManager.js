//This function is grabbing whatever input the user enters in the search box. The "input" the querySelector is grabbing was created in searchFormManager as a string that will be rendered to the DOM in HTML when it is called in main.js.
const handleSearch = event => {
  // console.log(event)
  const inputField = document.querySelector("input")
  console.log("user input", inputField.value)

  //"searchRecipes" is defined on the apiManager.js. It is the fetch call. The argument is whatever the user searches for. The value of the search (inputField.value) gets added to the URL as interpolation. My key also gets passed as interpolation, as well as the food2fork website on the apiManager.js page. Whatever search result gets parsed on apiManager.js. THEN, the instructions jump below and continue to be executed. 
  searchRecipes(inputField.value)
  .then(response => {
    // console.log(response.recipes)

  //dailyRecipeHtml is defined in the searchResultsManager.js. This is saying, execute the displayRecipeHtml function. Whatever comes back from the API is the argument here. 
    displayRecipeHtml(response.recipes)
    inputField.value = ""
  })
}
//This is adding an event listener to the search button. Whenever the button is clicked, the handleSearch function should be executed. handleSearch is defined and explained above.
const attachEventListenerToSearchButton = () => {
  const searchButton = document.getElementById("search-button")
  searchButton.addEventListener("click", handleSearch)
}
