async function getJoke(firstName, lastName) {
  //this api has parameters of first and last name to pass in to change the joke
  let res = await axios.get(`http://api.icndb.com/jokes/random`, { params: { firstName, lastName } });
  console.log(res.data.value.joke);
  console.log(res)
}

getJoke("Syscily", "Brown")