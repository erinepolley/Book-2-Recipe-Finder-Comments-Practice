//This function is making the search form in HTML. 
const buildAndAppendSearchForm = () => {
  const searchForm = `
  <section class="search-form">
    <h3>Search for recipes containing: </h3>
    <input type="text">
    <button id = "search-button">Search</button>
  </section>
  <section class="search-results"></section>
  `
  // console.log(searchForm)
//This section is taking the search form and rendering it to the DOM in a section with the id of container. . 
  const containerDiv = document.querySelector("#container")
  containerDiv.innerHTML = searchForm
}
