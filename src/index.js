console.log('%c HI', 'color: firebrick')

// ## Challenge 1

// This repository includes an `index.html` file that loads an `index.js` file.

// ```js
// const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
// ```

// Add JavaScript that:

// - on page load, fetches the images using the url above ⬆️
function fetchImage() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    // - parses the response as `JSON`
    .then((resp) => resp.json())
    //- adds image elements to the DOM **for each** 🤔 image in the array <div id="dog-image-container">
    .then((data) => {
        const div = document.getElementById('dog-image-container')
        images = data.message
        images.forEach(function(element){
            let newImg = document.createElement('img')
            newImg.src = element
            div.appendChild(newImg)
        })
    })
}

document.addEventListener('DOMContentLoaded', fetchImage())


// --------------------------------------------------------------------
// ## Challenge 2

// ```js
// const breedUrl = 'https://dog.ceo/api/breeds/list/all'
// ```

// After the first challenge is completed, add JavaScript that:

// - on page load, fetches all the dog breeds using the url above ⬆️
function fetchBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
    // - parses the response as `JSON`
    .then((resp) => resp.json())
// - adds the breeds to the page in the `<ul>` provided in `index.html`<ul id="dog-breeds">
    .then((data) => {
        // console.log(data.message)
        const grabUl = document.getElementById('dog-breeds')
        breeds = data.message
        for(let breed in breeds) {
            let newLi = document.createElement('li')
            newLi.innerText = breed
            newLi.classList.add('breed')
            grabUl.appendChild(newLi)
        }
    })
}

document.addEventListener('onload', fetchBreeds())
// ---------------------------------------------------------------------------

// ## Challenge 3

// Once all of the breeds are rendered in the `<ul>`, add JavaScript so that, when
// the user clicks on any one of the `<li>`s, the font color of that `<li>`
// changes. This can be a color of your choosing.
let myTimeout = setTimeout(changeTextColor, 3000)

function changeTextColor() {
    let listBreed = document.getElementsByClassName('breed')
    for(let breed of listBreed) {
    breed.addEventListener('click',function() {
        breed.style.color = 'red'
        })
    }
}

//---------------------------------------------------------------------------------
// ## Challenge 4

// Once we are able to load _all_ of the dog breeds onto the page, add JavaScript
// so that the user can filter breeds that start with a particular letter using a
// [dropdown](https://www.w3docs.com/learn-html/html-select-tag.html).



// For example, if the user selects 'a' in the dropdown, only show the breeds with
// names that start with the letter a. For simplicity, the dropdown only includes
// the letters a-d. However, we can imagine expanding this to include the entire
// alphabet.

// ---

{/* <select id="breed-dropdown" name="select-breed">
      <option value="a">a</option>
      <option value="b">b</option>
      <option value="c">c</option>
      <option value="d">d</option>
    </select> */}

let myTimeoutBreedMenu = setTimeout(chooseLetter, 3000)

function chooseLetter() {
    let listBreed = document.getElementsByClassName('breed')
    let breedsArray = []
    for(let i = 0; i<listBreed.length; i++){
        breedsArray.push(listBreed[i].innerText)
    }
    const breedDropdown = document.getElementById('breed-dropdown')
    breedDropdown.addEventListener('change',function(){
        let letter = breedDropdown.value
        breedsArrayByLetter = breedsArray.filter(breeds => breeds.charAt(0) === letter)
        const grabUl = document.getElementById('dog-breeds')
        grabUl.innerHTML = ''
        for(let breed of breedsArrayByLetter) {
            let newLi = document.createElement('li')
            newLi.innerText = breed
            newLi.classList.add('breed')
            grabUl.appendChild(newLi)
        }
    })
    
}
 

        // }
        // let filterByLetter = listBreed.filter(function(letter) {
        //     return listBreed[i].innerText.charAt(0) === letter
        //     // filteredBreedsByLetter.push()
        //     })
        // console.log(filterByLetter)
        // })

//             })
//         for(let breed of listBreed) {
            
//         breed.addEventListener('click',function() {
//             breed.style.color = 'red'
//             })
//         }
//     })
// }








// ---