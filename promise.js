let myFirstPromise = new Promise((resolve, reject) => {
  setTimeout(function(){
    resolve("Success!"); // Yay! Everything went well!
  }, 3000);
});

myFirstPromise.then(function(value) {
  console.log(value);
});

console.log(myFirstPromise);
