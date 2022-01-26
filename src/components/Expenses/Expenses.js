import './Expenses.css'
import React, { useState } from 'react'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
    const [slectedYear, setSelectedYear] = useState('2020')
    const filteredYearHandler = (enteredyear) => {
        setSelectedYear(enteredyear)
    }
    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === slectedYear)
    return (

        <Card className="expenses" >
            <ExpensesChart expenses={ filteredExpenses } />
            <ExpensesFilter selected={ slectedYear } onFilteredYear={ filteredYearHandler } />
            <ExpensesList filteredExpenses={ filteredExpenses } />

        </Card>

    )
}
export default Expenses;