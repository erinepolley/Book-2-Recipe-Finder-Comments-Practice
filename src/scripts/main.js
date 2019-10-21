console.log("The recipe finder file structure is set up!")

//This function is located in searchFormManager.js. It includes two parts: building the search form with a string that will become HTML, and rendering it to the DOM. 
buildAndAppendSearchForm()

//All this is doing is attaching a listener event to the search button. When it is clicked, it causes a long series of things to happen, as seen on eventManager.js.
attachEventListenerToSearchButton()
