import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import Card from './Card'
function Expenses(props) {

  return (
    <Card className="expenses">
    <ExpenseItem
      amount={ props.expenses[0].amount }
      title={ props.expenses[0].title }
      date={ props.expenses[0].date }
    />
    <ExpenseItem
      amount={ props.expenses[1].amount }
      title={ props.expenses[1].title }
      date={ props.expenses[1].date }
    />
    <ExpenseItem
      amount={ props.expenses[2].amount }
      title={ props.expenses[2].title }
      date={ props.expenses[2].date }
    />
    <ExpenseItem
      amount={ props.expenses[3].amount }
      title={ props.expenses[3].title }
      date={ props.expenses[3].date }
    />

  </Card>)
}
export default Expenses;