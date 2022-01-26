// async function getData() {
//   const response = await axios.get('https://swapi.dev/api/planets/');
//   //following line will not run until the above is complete because of keyword away
//   //next and results will be destructured from response.data 
//   const { next, results } = response.data;
//   //console.log(next) //https://swapi.dev/api/planets/?page=2
//   for (let planet of results) {
//     console.log(planet.name)
//   }
//   const response2 = await axios.get(next);
//   const results2 = response2.data.results;
//   for (let planet of results2) {
//     console.log(planet.name)
//   }
// }

// getData();
// console.log("I HAPPEN AFTER getData()")

async function getLaunches() {
  const res = await axios.get('https://api.spacexdata.com/v3/launches/upcoming');
  
  //inline code to manipulate DOM
  const ul = document.querySelector("#launches")
  //pause on maniuplating DOM 
  console.log(res)
  console.log(res.data)
  //for (let launch of res.data){
    //inline to manipulate dom 
    // const newLI = document.createElement("LI")
    // const mission = document.createElement("B")
    // mission.innerText = launch.mission_name
    // newLI.append(mission)
    // newLI.innerHTML += `- ${launch.rocket.rocket_name}`
    // ul.append(newLI)
    //end of inline text that maniupalating DOM 
    //console.log(launch.mission_name)
   // console.log(launch.rocket.rocket_name)
    renderLaunches(res.data); //running renderLaunches to maniuplate DOM when w/o inline code
}
  //
//}

//Changing the DOM, not inline
function renderLaunches(launches) {
  const ul = document.querySelector("#launches")
  for (let launch of launches){
    //made function below of all dis 
    // const newLI = document.createElement("LI")
    // const mission = document.createElement("B")
    // mission.innerText = launch.mission_name
    // newLI.append(mission)
    // newLI.innerHTML += `- ${launch.rocket.rocket_name}`
    // ul.append(newLI)
    
    ul.append(makeLaunchLI(launch))
    
  }
}

function makeLaunchLI(launch) {
  const newLI = document.createElement('LI');
  const mission = document.createElement('B');
  mission.innerText = launch.mission_name;
  newLI.append(mission);
  newLI.innerHTML += ` - ${launch.rocket.rocket_name}`
  return newLI;
}

const btn = document.querySelector('#getLaunches');
//run getLaunches when button is clicked 
btn.addEventListener('click', getLaunches);
