import { useState, useContext } from "react"
import uuid from 'react-uuid'

import React  from 'react'
import { GlobalContext } from './context/GlobalState.jsx';


function AddTransaction() {
  const  [amount, setAmount] = useState('')
  const  [text, setText] = useState(0)
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: uuid(),
      text, 
      amount: +amount
    }
    addTransaction(newTransaction)
  }

  return (
<>

    <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlfor="text">Text</label>
          <input type="text" value={text} onChange={(e)=> setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlfor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label>
          <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)}  placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
</>

  )
}

export default AddTransaction
