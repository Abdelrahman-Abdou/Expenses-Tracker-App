import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';
import React, { useState } from 'react'


const Dummy_Expenses = [{
  id: 0,
  amount: 1100,
  title: 'The care tires ',
  date: new Date(2019, 3, 29)
},
{
  id: 1,
  amount: 230,
  title: 'The React course',
  date: new Date(2019, 5, 29)
},
{
  id: 2,
  amount: 2000,
  title: 'The golden ring',
  date: new Date(2020, 9, 23)
}, {
  id: 3,
  amount: 25,
  title: 'Cinema',
  date: new Date(2020, 7, 4)
}, {
  id: 4,
  amount: 300,
  title: 'Gym',
  date: new Date(2021, 1, 2)
}, {
  id: 5,
  amount: 1230,
  title: 'New clothes ',
  date: new Date(2021, 3, 12)
}
]
const App = () => {
  const [expenses, setExpenses] = useState(Dummy_Expenses)
  const EnteredExpensesHAndler = expense => {
    setExpenses(prevExpense => [...prevExpense, expense])
  }


  return (
    <div>

      <NewExpense onAddExpense={ EnteredExpensesHAndler }
      />

      <Expenses expenses={ expenses }
      />
    </div>
  );

}
export default App;