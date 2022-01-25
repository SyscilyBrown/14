
async function searchGif(query) {
    let searchTerm = query
    const res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=yDuST6uQY24qwi4JvrttR1xVk9Xn1aRL&q=${query}&limit=1&offset=0&rating=g&lang=en`, {
      params: {
        q: searchTerm,
        api_key: "yDuST6uQY24qwi4JvrttR1xVk9Xn1aRL"
      }
    });
    console.log (res.data);
  }

async function getURL(query) {
    const res = await axios.post(`https://api.giphy.com/v1/gifs/search?api_key=yDuST6uQY24qwi4JvrttR1xVk9Xn1aRL&q=${query}&limit=1&offset=0&rating=g&lang=en`);
    const url = res.data.url
    console.log(url)
}


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