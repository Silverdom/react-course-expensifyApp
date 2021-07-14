//import  './utils.js'
// import subtract2, { square, add } from './utils.js'  // default import can be named anything

// console.log(subtract2(10,6));

// import isSenior, { isAdult, canDrink } from "./person";

// console.log(isSenior(63));

import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
//import './firebase/firebase';
//import './playground/promises';

const store = configureStore();
console.log('test');
store.subscribe(() => {
  console.log(store.getState());
});

console.log(store);
// store.dispatch(addExpense({ description: "Water bill", amount: 4500 }));
// store.dispatch(addExpense({ description: "Gas bill", amount: 1000, createdAt: 1000 }));
// store.dispatch(addExpense({ description: "Electricity bill", amount: 2000 }));

//store.dispatch(setTextFilter("water"));

//const state = store.getState();
//const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//console.log(visibleExpenses);



//console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
