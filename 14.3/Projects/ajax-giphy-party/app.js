// const searchTerm = document.getElementById("searchTerm")

// async function addGif (searchTerm){
//   const urls = []
//   const res = await axios.get("https://api.giphy.com/v1/gifs/search?", {
//     params: {
//       q: searchTerm,
//       api_key: "yDuST6uQY24qwi4JvrttR1xVk9Xn1aRL"
//     }
//   });
//   for(let url of res.data.data){
//     urls.push(res.data.data[0].images.original.url)
//     //returning every url
//   }
//   randomGif = urls[Math.floor(Math.random()*urls.length)]
//   // newGif = document.createElement("img")
//   // newGif.src = randomGif
//   // console.log(newGif.value)
//   console.log(randomGif)
//   newGif = document.createElement("img")
//   newGif.setAttribute("src", `${randomGif}`)
//   document.body.appendChild(newGif)

// }

const form = document.getElementById("form")
form.addEventListener("submit", async function(event) {
  event.preventDefault(); 
  const urls = []
  const res = await axios.get("https://api.giphy.com/v1/gifs/search?", {
    params: {
      q: searchTerm.value,
      api_key: "yDuST6uQY24qwi4JvrttR1xVk9Xn1aRL"
    }
  });
  for(let url of res.data.data){
    urls.push(res.data.data[0].images.original.url)
    //returning every url
  }
  randomGif = urls[Math.floor(Math.random()*urls.length)]
  // newGif = document.createElement("img")
  // newGif.src = randomGif
  // console.log(newGif.value)
  console.log(randomGif)
  newGif = document.createElement("img")
  newGif.setAttribute("src", `${randomGif}`)
  newGif.classList.add("gifs")
  document.body.appendChild(newGif)
  searchTerm.value = " "
 
})

const removeBtn = document.getElementById("removeButton")
removeBtn.addEventListener("click", function(event){
  event.preventDefault(); 
  $(".gifs").remove()
})
//document.getElementById("submit-button").addEventListener("click", addGif)


//add gif to page from click event listener 
//async function appendGif(){
//const button = document.getElementById("submit-button")
//button.addEventListener("click", appendGif)
//}


  /* 
  event listener for form submission 
  take submission as query string in the api 
  select random gif that's returned from dataset 
  append said gif to doc
  clear input 
  event listener from click on remove button to remove all gif 
    - give images class to remove all 
  
getUserInput() => {
 1) getData(userInput)
 const data = getData(userInput)
 2) randomImage = getRandomImage(data)
 3) addImage(randomImage)
}
  */