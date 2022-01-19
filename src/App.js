
import Expenses from './components/Expenses'

function App() {
  const expenses = [{
    id: 0,
    amount: 297 + '$',
    title: 'The Care',
    date: new Date(2019, 3, 29)
  },
  {
    id: 1,
    amount: 878 + '$',
    title: 'The golden ring',
    date: new Date(2022, 0, 23)
  }, {
    id: 2,
    amount: 546 + '$',
    title: 'The Courses Costs',
    date: new Date(2021, 1, 2)
  }, {
    id: 3,
    amount: 4664 + '$',
    title: 'The Flat Costs',
    date: new Date(2020, 3, 12)
  }]
  return (
    <div>
      <h2> Lets get started </h2>
      <Expenses
      expenses={expenses}
      />
    </div>
  );
}

export default App;
