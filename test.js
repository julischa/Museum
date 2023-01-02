let url = "https://www.rijksmuseum.nl/api/nl/collection?key=Hu8sPHp0&involvedMaker=Rembrandt+van+Rijn"
let url2 = "https://www.rijksmuseum.nl/api/nl/collection?key=Hu8sPHp0&involvedMaker=Johannes+Vermeer"


function FetchRembrandData(artistName) {
let testUrl = `https://www.rijksmuseum.nl/api/nl/collection?key=Hu8sPHp0&involvedMaker=${artistName}`

    console.log('artistName :>> ', artistName);
    fetch(testUrl).then(
        (response) => {

            return response.json()
        }
    ).then((result) => {
        console.log('result :>> ', result);
        render(result)
    }).catch((error) => {
        console.log('error :>> ', error);
    })
}


function createButtons() {
    /// TEST AREA
    // create buttons for veermer and rembrandt
    const buttonContainer = document.getElementById("button-container")

    let rembrandtButton = document.createElement("button")
    rembrandtButton.setAttribute("id", "rembrandt")
    rembrandtButton.setAttribute("class", "px-4 py-2 mt-2 mx-2 bg-white")
    rembrandtButton.innerText = "REMBRANDT"
    rembrandtButton.value = "Rembrandt van Rijn"
    buttonContainer.appendChild(rembrandtButton)
    let veermerButton = document.createElement("button")
    veermerButton.setAttribute("id", "vermeer")
    veermerButton.setAttribute("class", "px-4 py-2 mt-2 mx-2 bg-white")
    veermerButton.innerText = "VERMEER"
    veermerButton.value = "Johannes Vermeer"
    buttonContainer.appendChild(veermerButton)
    addEvents()
    ///////
}

function addEvents() {
    const rembrandtButton = document.getElementById("rembrandt")
    const veermerButton = document.getElementById("vermeer")

    rembrandtButton.addEventListener("click", (event) => {
        console.log('event.target :>> ', event.target.value);
        const artistName=event.target.value
        FetchRembrandData(artistName)
        
    })
    veermerButton.addEventListener("click", (event) => {
        console.log("I've been clicked");
        console.log('event.target :>> ', event.target.value);
        FetchVermeerData()
    })
}

createButtons()

function render(api) {
    console.log('result inside Render :>> ', api);
    // get body element from DOM  
    let cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = ""

    for (let i = 0; i < api.artObjects.length; i++) {
        // create html element / tags 

        //h4 tag title
        let title = document.createElement("h4")
        title.innerText = api.artObjects[i].title
        console.log(title.innerText);


        //img 
        let img = document.createElement("img")
        img.setAttribute("src", api.artObjects[i].webImage.url)
        //img.setAttribute("width", 200)

        //p tag  author
        let author = document.createElement("p")
        author.innerText = api.artObjects[i].principalOrFirstMaker

        //div container
        let container = document.createElement("div")



        //appending title-img-author => container
        container.appendChild(title)
        container.appendChild(img)
        container.appendChild(author)

        //appending CONTAINER => body
        cardContainer.appendChild(container)

    }


}

// render()



// vermeer function

function FetchVermeerData() {
    fetch(url2).then(
        (response) => {

            return response.json()
        }
    ).then((result) => {
        console.log('result :>> ', result);
        render(result)
    }).catch((error) => {
        console.log('error :>> ', error);
    })
}

// Define the API endpoint for searching the product catalog
var endpoint = "http://www.rijksmuseum.nl/api/nl/collection/SK-C-5";

// Define the search query
var query = "red shirt";

// Use the fetch() method to call the API and search for the specified product
fetch(endpoint + "?q=" + query)
  .then(function(response) {
    // Parse the API response as JSON
    return response.json();
  })
  .then(function(data) {
    // Check if any products were found
    if (data.products.length > 0) {
      // Loop through the array of products
      data.products.forEach(function(product) {
        // Print the product details
        console.log("Product: " + product.name);
        console.log("Price: " + product.price);
        console.log("-------------------");
      });
    } else {
      // No products were found
      console.log("No products were found for the specified query.");
    }
  })
  .catch(function(error) {
    // There was an error calling the API
    console.log("An error occurred: " + error);
  });