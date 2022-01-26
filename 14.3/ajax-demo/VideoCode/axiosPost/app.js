// async function getUsers() {
//   const res = await axios.get('https://reqres.in/api/users');
//   console.log(res);
// }

// async function createUser() {
//   const res = await axios.post('https://reqres.in/api/users', { username: 'NiggaTheCracky', email: "crinacks@gmail.com", age: 74});
//   console.log(res);
// }

// createUser();


async function getUsers(token) {
  const res = await axios.get('https://hack-or-snooze-v3.herokuapp.com/ushttps://hack-or-snooze-v3.herokuapp.com/users?skip=0&limit=10', {params: {token}})
  console.log(res);
}

async function signUp(username, password, name) {
  const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/signup', { user: { name, username, password } })
  console.log(res);
}
//signUp("sys_capone", "CamRon123321.", "Syscily.")
//is signUp was run again, there would be an error because a signup with these creditials already exists, but log in would


async function login(username, password) {
  const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/login', { user: { username, password } })
  console.log(res);
  return res.data.token;
}

//getUsers();

//example of it being hardcorded. In the project I'll take a users input
async function getUsersWithAuth() {
  const token = await login("sys_capone", "CamRon123321.");
  console.log(token);
}
getUsersWithAuth()

async function createStory() {
  const token = await login("sys_capone", "CamRon123321.");
  const newStory = {
    token,
    story: {
      author: 'Alex Haley',
      title: 'Roots',
      url: 'https://www.dacapopress.com/titles/alex-haley/roots/9780306824869/'
    }
  }
  const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/stories', newStory);
  console.log(res);
}

// // getUsersWithAuth();
createStory();

