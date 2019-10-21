const apiBaseUrl = "https://www.food2fork.com/api/"

//The food2ForkKey comes from the apiKeys.js.example. This is what is going to happen after a user searches for something.
const searchRecipes = searchInput => fetch(`${apiBaseUrl}search?key=${food2ForkKey}&q=${searchInput}`)
.then(response => response.json())
