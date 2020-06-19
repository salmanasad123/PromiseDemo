console.log("Before");

// getUser(1, (user) => {
//   console.log("User", user);

//   // get the repositories
//   const repos = getRepositories(user.username, function (repos) {
//     console.log(repos);
//   });
// });

// Approach 1
// const p = getUser(1);
// p.then(function (user) {
//   console.log("User", user);
//   const p1 = getRepositories(user.username);
//   p1.then(function (repos) {
//     console.log(repos);
//   });
// });

// Approach 2
// getUser(1)
//   .then(function (result) {
//     console.log(result);
//     return getRepositories(result.username);
//   })
//   .then(function (result) {
//     console.log(result);
//   });

// Approach 3
// const p = getUser(1);
// const p2 = p.then(function (result) {
//   console.log(result);
//   return getRepositories(result.username);
// });
// p2.then(function (result) {
//   console.log(result);
// });

// Async and Await approach
// getUser returns the promise so we can await it , anytime when we call a function that returns a promise we can await the result of that function

async function displayRepos() {
  try {
    const user = await getUser(1);
    const repos = await getRepositories(user.username);
    console.log(repos);
  } catch (err) {
    console.log(err);
  }
}

displayRepos();

console.log("After");

function getUser(id) {
  return new Promise(function (resolve, reject) {
    // kick off async work
    setTimeout(function () {
      console.log("Reading a user from a database");
      resolve({ id: id, gitHubUsername: "mosh" });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("Fetching repositores from github");
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}
