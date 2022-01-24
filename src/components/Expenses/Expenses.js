import './Expenses.css'
import React, { useState } from 'react'
// import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList';
function Expenses(props) {
    const [slectedYear, setSelectedYear] = useState('2020')
    const filteredYearHandler = (enteredyear) => {
        setSelectedYear(enteredyear)
        console.log(slectedYear)
    }
    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === slectedYear)

    // let expensesContent = <p>There are no costs found </p>
    // if (filteredExpenses.length > 0) {

    //     expensesContent = filteredExpenses.map(expense =>
    //         < ExpenseItem
    //             key={ expense.id }
    //             amount={ expense.amount }
    //             title={ expense.title }
    //             date={ expense.date } />
    //     )

    // }

    return (

        <Card className="expenses" >
            <ExpensesFilter selected={ slectedYear } onFilteredYear={ filteredYearHandler } />
            <ExpensesList filteredExpenses={ filteredExpenses}/>
        </Card>

    )
}
export default Expenses;