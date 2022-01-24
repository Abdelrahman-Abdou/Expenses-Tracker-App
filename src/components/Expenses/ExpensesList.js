import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css'
const ExpensesList = (props) => {

  let expensesContent = <p>There are no costs found </p>
  if (props.filteredExpenses.length > 0) {
    console.log(props.filteredExpenses)
    expensesContent = props.filteredExpenses.map(expense =>
      < ExpenseItem
        key={ expense.id }
        amount={ expense.amount }
        title={ expense.title }
        date={ expense.date } />
    )
  }
  return (
    <ul className='expenses-list' >
      <li>{ expensesContent }</li>
    </ul>
  )
}
export default ExpensesList;