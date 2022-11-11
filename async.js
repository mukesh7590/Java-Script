// Problem With Callbacks
// When writing large applications we have to deal with multiple asynchronous tasks that
// needs to be done one after the other and this causes a large amount of nested
// callbacks. This code becomes very unreadable and difficult to maintain which causes a
// callback hell. To escape this problem we use promises instead of callbacks to handle
// asynchronous tasks.

function doATask(callback) {
   console.log("\n\nTask 1 done!");
   callback();
}
function yetAnotherTask() {
   console.log("\nTask 2 done\n");
}

doATask(yetAnotherTask);

// Promises
// Promises are used to handle asynchronous tasks in JavaScript. Managing them is
// easier when dealing with multiple asynchronous operations, where we’ll get stuck in
// callback hell, created by callbacks which ultimately leads to unmanageable code.
// A Promise is a proxy for a value not necessarily known when the promise is created. It
// allows you to associate handlers with an asynchronous action's eventual success value
// or failure reason.
// A promise is always in one of these states:
// ● Pending
// ● Resolved
// ● Rejected

// var promise = new Promise(function (resolve, reject) {
//    const x = "geeksforgeeks";
//    const y = "geeksforgeeks";
//    if (x === y) {
//       resolve();
//    } else {
//       reject();
//    }
// });

// promise
//    .then(function () {
//       console.log("Success, You are a GEEK");
//    })
//    .catch(function () {
//       console.log("Some error has occurred");
//    });

const promise = new Promise((resolve, reject) => {
   const num = Math.floor(Math.random() * 100);
   if (num % 2) resolve("odd");
   else reject("even");
});
promise
   .then((data) => {
      console.log(data);
   })
   .catch((error) => {
      console.log(error);
   });

function oddEven() {
   return (prom = new Promise((resolve, reject) => {
      const num = Math.floor(Math.random() * 100);
      if (num % 2) resolve("odd");
      else reject("even");
   }));
}
oddEven()
   .then((data) => {
      console.log(data);
   })
   .catch((error) => {
      console.log("error");
   });
