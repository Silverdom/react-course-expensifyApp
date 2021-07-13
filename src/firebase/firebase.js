import firebase from "firebase/app";
import "firebase/database";
//import * as expensesActions from '../actions/expenses';
//expensesActions.addExpense();

const firebaseConfig = {
  apiKey: "AIzaSyAjjWI1Cv7zswaYgFCTHTtr2OTXbh3SOrI",
  authDomain: "expensify-c77e9.firebaseapp.com",
  databaseURL:
    "https://expensify-c77e9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "expensify-c77e9",
  storageBucket: "expensify-c77e9.appspot.com",
  messagingSenderId: "549667228098",
  appId: "1:549667228098:web:739b5d49774acd9368ae5b",
  measurementId: "G-MMZDVFH743",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

//database.ref("expenses").push({ description: "Water bill", amount: 4500 });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot)=>{
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     })

//other database events
//child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
})
//child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
})
//child_added
database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
})

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expe = [];

//         snapshot.forEach((childSnapshot) => {
//             expe.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });    
//         });

//         console.log(expe);
//     }, (e) => {
//         console.log("Error: ",e);
//     });


// database.ref('notes').push({
//     title: 'Course',
//     body: 'React Native, Angular js'
// })

// database.ref("notes").set(notes);

//fetchdata ----------------

// database
//   .ref()
//   .once("value")
//   .then((snapshot) => {
//       const val = snapshot.val();
//       console.log(val);
//   })
//   .catch((e) => {
//       console.log('Error: ', e)
//   });

// database.ref().on('value', (snapshot) => {  //on listens to database changes and rerun the callback
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error: ',e);
// })

// setTimeout(()=>{
//     database.ref().update({
//         stressLevel: 3,
//     })
// }, 3500)

//   database.ref().set({       // ref() gives us a reference of part of database
//       name: 'Apple',        //if no parameter provided in ref() it goes reference to root
//       age: 5,
//       stressLevel: 6,
//       job: {
//         title: 'Software Developer',
//         company: 'Ubisoft'
//       },
//       isSweet: true,
//       location: {
//           city: 'Srinagar',
//           country: 'India'
//       },
//   }).then(() => {
//       console.log('Data is Saved');
//   }).catch((error) => {
//     console.log('This failed: ', error);
//   })

// //   //database.ref().set('This is my Data.');   // this set wipe prev value and wirte the new one

// // //   database.ref('age').set(6);
// // //   database.ref('location/city').set('Srinagar');

// //   database.ref('attributes').set({
// //     color: 'red',
// //     price: 1
// // }).then(() => {
// //     console.log("data updated!");
// // }).catch((error) => {
// //     console.log('Error: ',error);
// // });

// database.ref('isSweet').remove().then(()=>{
//     console.log("data was removed");
// }).catch((error) =>{
//     console.log('Error: ', error);
// });

// //database.ref('isSweet').set(null); <this also removes data>

// //Update -----------------------------------
// database.ref().update({
//     name: 'Mike',
//     age: 29,
//     //job: 'Software developer',
//     //isSweet: null,
//     //'location/city' : 'Bangalore'
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Pune'
// })

//fetchdata ---------------------------------
