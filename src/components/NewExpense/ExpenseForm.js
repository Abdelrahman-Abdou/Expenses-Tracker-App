import React, { useState } from 'react';
import './ExpenseForm.css';


const ExpenseForm = (props) => {
  const [enteredTitle, setTitle] = useState('');
  const [enteredAmount, setAmount] = useState('');
  const [enteredDate, setDate] = useState('');
  const titleChangeHandler = (event) => {
    setTitle(event.target.value)
  }
  const amountChangeHAndler = (event) => {
    setAmount(event.target.value)
  }
  const dateChangeHAndler = (event) => {
    setDate(event.target.value)
  }
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }
    props.onSaveExpenseData(expenseData);
    setTitle('')
    setDate('')
    setAmount('')
  }
  return (
    <form onSubmit={ submitHandler }>
      <div className='new-expense__controls '>
        <div className='new-expense__control'>
          <label className='new-expense__control label'>Title</label>
          <input className='new-expense__control input'
            type="text"
            onChange={ titleChangeHandler }
            value={enteredTitle }/>
        </div>
        <div className='new-expense__control'>
          <label className='new-expense__control label'>Amount</label>
          <input className='new-expense__control input'
            type="number" min='0.01' step='0.01'
            onChange={ amountChangeHAndler }
            value={ enteredAmount } />
        </div>
        <div className='new-expense__control'>
          <label className='new-expense__control label'>Date</label>
          <input className='new-expense__control input'
            type="date" min='2019-01-01' max='2022-12-31'
            onChange={ dateChangeHAndler }
            value={enteredDate }/>
        </div>

      </div>
      <div className='new-expense__actions' >
        <button type='submit'>Submit</button>
      </div>
    </form>)

}


export default ExpenseForm;