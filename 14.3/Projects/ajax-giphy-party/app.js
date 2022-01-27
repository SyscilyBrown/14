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
  //search the api based on what is entered in the form when clicked 
  for(let url of res.data.data){
    urls.push(res.data.data[0].images.original.url)
    //11-13 iterate through all the returned URLS and choose arandom url 
  }
  randomGif = urls[Math.floor(Math.random()*urls.length)]

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


  /* 
  event listener for form submission 
  take submission as query string in the api 
  select random gif that's returned from dataset 
  append said gif to doc
  clear input 
  event listener from click on remove button to remove all gif 
    - give images class to remove all */