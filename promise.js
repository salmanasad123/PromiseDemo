const p = new Promise(function (resolve, reject) {
  // kick off some async work (access database, start timer)
  //... when async work completes we may have error or value

  setTimeout(function () {
    //resolve(1);
    reject(new Error("error message"));
  }, 2000);
});

p.
then(function (value) {
  console.log(value);
})
.catch(function (err) {
  console.log(err.message);
});
