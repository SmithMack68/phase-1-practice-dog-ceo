const container = document.querySelector('#dog-image-container')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const ulContainer = document.querySelector('#dog-breeds')
const dropDown = document.querySelector('#breed-dropdown')
let breedsArray = []

ulContainer.addEventListener('click', handleClick)
dropDown.addEventListener('change', handleChange)

//Challenge 1
function getAllDogs(){
        fetch(imgUrl)
        .then(resp => resp.json())
        .then(images => {
            const imgs = images.message
            let imgsArray = createImgElement(imgs)
            renderElement(imgsArray)
        })
}    
function createImgElement(imgs){
    return imgs.map((img) => {
        let i = `<img src= ${img}>`
        return i
    })
}
function renderImgs(imgsArray){
        imgsArray.forEach(element => {
            renderElement(element)
        })
    }
function renderElement(element){
    ulContainer.innerHTML += element
}
//Challenge 2
function getDogBreeds(){
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(breeds => {
    breedsArray = Object.keys(breeds.message)
    const breedsLis = createLiElement(breedsArray)
    renderLis(breedsLis)
    })
}    
function createLiElement(breedsArray){
    return breedsArray.map((breed) => {
        let li = `<li>${breed}</li>`
        return li
    })
}
function renderLis(breedsLis){
    breedsLis.forEach(element => {
        renderElement(element)
    })
}   
function handleClick(e){
    if(e.target.style.color === 'teal'){
        e.target.style.color = 'black'
    } else {
        e.target.style.color = 'teal'
    }
}
function handleChange(e){
    const letter = e.target.value
    const filteredBreeds = breedsArray.filter(breed => breed.startsWith(letter))
        const filteredBreedsLis = createLiElement(filteredBreeds)
        ulContainer.innerHTML = ''
        renderLis(filteredBreedsLis)
}
getAllDogs()
getDogBreeds()
// function getAllDogs(){
//     fetch(imgUrl)
//     .then(resp => resp.json())
//     .then(data => data.message.forEach(link => {
//         const img = document.createElement('img')
//         img.src = link
//         document.getElementById("dog-image-container").appendChild(img)
//      })
//      )
//  }
//  
//         for(const breedName in data.message){
//             const li = document.createElement('li')
//             li.innerText = breedName
//             const dogBreeds = document.querySelector('#dog-breeds')
//             dogBreeds.appendChild(li)
//             li.addEventListener('click', (e)=> {
//                  if(e.target.style.color === 'teal'){
//                     e.target.style.color = 'black'
//                  } else {
//                     e.target.style.color ='teal'
//                 }
//             })
//         }
//     })
// }
// //Render choosen breeds by letter
// let dropdown = document.getElementById("breed-dropdown")
// let dogs = document.querySelector('#dog-breeds')

// function dropDownEventListener(){
//     dropdown.addEventListener('change', (e) => {
//         selectBreedsStartingWith(e.target.value)
//     })
// }
// function selectBreedsStartingWith(letter){
//     breeds.filter(breed => breed.startsWith(letter))
    
// }
// // function filterByBreed(render){
// //         filteredBreeds.forEach(breed => {
// //             let li = document.createElement('li')
// //             li.textContent = breed
// //             dogs.append(li)
            
// //             })
// //         })
// //     }
// // 
// //}




//     getDogBreeds()
//     //filterByBreed()
//     dropDownEventListener()
//     renderLis()
// 
