/**
 * Object destructuring...
 */

import React, { useState,useEffect } from 'react';
import ReactDOM from 'react-dom';

console.log("destructuring.js");

const person = {
  name: "Andrew",
  age: 26,
  location: {
    city: "Howrah",
    //temp: 30,
  },
};

// const name = person.name;
// const age = person.age;

const { name = "Anonymous", age } = person; //object destructuring and setting default values
console.log(`${name} is ${age}`);

const { city, temp: temperature = 15 } = person.location; //object destructuring and renaming
console.log(`It's ${temperature} in ${city}`);

const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Penguin", //default to Self-Published
  },
};


const {name: publisherName = 'Self-Published'} = book.publisher;
console.log(publisherName); 


/**
 * Array destructuring
 */

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, cityName, state = 'New York'] = address;   //array destruturing and setting default
console.log(`You are in ${cityName} ${state}.`);


const item = ['Coffee(hot)', '$2.00', '$2.50', '$2.75'];


const [itemName, ,price] = item;
console.log(`A medium ${itemName} costs ${price}`);

const myObj = {my2ndKey: 20};

const { myKey = 1, my2ndKey: newKey = 2 } = myObj;
console.log(newKey);

const App = (props) => {

  const [count, setCount] = useState(props.count);
  console.log(props.count);
  const increment = () => {
    setCount(count + 1);
  }
  const decrement = () => {
    setCount(count - 1);
  }
  const reset = () => {
    setCount(props.count );
  }
  return (
    <div>
      <p>The Current Count is { count }</p>
      <button onClick = {increment}>+1</button>
      <button onClick = {decrement}>-1</button>
      <button onClick = {reset}>reset</button>
    </div>
  )
};

App.defaultProps = {
  count: 0
}

ReactDOM.render(<App count={1}/>, document.getElementById('app'));