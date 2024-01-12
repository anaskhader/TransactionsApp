import { useState } from 'react'
import Header from './Header.jsx'
import Balance from './Balance.jsx'
import IncomeExpenses from './IncomeExpenses.jsx'
import TransactionList from './TransactionList.jsx'
import AddTransaction from './AddTransaction.jsx'

import { GlobalProvider } from './context/GlobalState.jsx'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  )
}

export default App
