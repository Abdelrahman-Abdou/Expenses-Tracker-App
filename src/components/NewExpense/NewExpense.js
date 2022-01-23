import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const saveExpenseHandler = (expenseData) => {
        const savedExpense = {
            ...expenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(savedExpense)
    }



    return (
        <div className = 'new-expense' >
        <ExpenseForm onSaveExpenseData = { saveExpenseHandler }
            />
            </div >
    )

}
export default NewExpense;