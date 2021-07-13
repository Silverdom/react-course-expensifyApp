// const promise = new Promise((resolve, reject) => {
//   //   setTimeout(() => {
//   //     reject({
//   //       name: "Apple",
//   //       age: 5,
//   //     });
//   //   }, 5000);
//   const a = 2;
//   if (a == 2) {
//     resolve({
//     //   name: `Apple`,
//       age: 5,
//     });
//   } else {
//     reject("Cannot fetch the data");
//   }
// });

// console.log("Before");

// promise
//   .then(({name = 'banana'}) => {    //then can take 2 arguments
//     console.log(name);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//   promise
//   .then(({name = 'banana'}) => {    //then can take 2 arguments
//     console.log(name);
//   }, err => {
//     console.log(err);
//   });

// console.log("After");


const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('This is my resolved data');
    reject('Something went wrong!');
  }, 5000)
});

console.log('before');

// promise.then((data) => {  //multiple parameters not allowed
//   console.log('1', data);  //multiple then are allowed
// });

promise.then((data) => {
  console.log('2', data);
}).catch((error) =>{
  console.log('error: ', error)
});

//promise then alternative-----
// promise.then((data) => {
//   console.log('2', data);
// }, (error) =>{
//   console.log('error: ', error)
// });


console.log('after');