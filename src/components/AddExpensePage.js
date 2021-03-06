import React from "react";
import ReactDOM from "react-dom";
import { ExpenseForm } from "./ExpenseForm";
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';

const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm 
        onSubmit={(expense) => {
            console.log(expense);
            props.dispatch(addExpense(expense));
            props.history.push('/');
        }}
    />
  </div>
);

export default connect()(AddExpensePage);
