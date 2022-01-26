import React, { useState } from 'react';

import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false)
    const clickHandler = () => {
        setIsEditing(true)
    }
    const stopEditing = () => {
        setIsEditing(false)
    }
    const saveExpenseHandler = (expenseData) => {
        const savedExpense = {
            ...expenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(savedExpense)
        setIsEditing(false)
    }
    return (

        <div className='new-expense' >

            { !isEditing && <button
                onClick={ clickHandler }>Add New Expense</button> }
            { isEditing && < ExpenseForm
                onSaveExpenseData={ saveExpenseHandler }
                onCancel={ stopEditing } /> }
        </div >
    )

}
export default NewExpense;