import React, {useState, useContext} from 'react'
// import { GlobalContext } from '../context/GlobalState';
import { addIncome, addExpense } from '../store/actions'

export const AddTransaction = () => {
  const [detail, setDetail] = useState('');
  const [amount, setAmount] = useState(0);
  const [option, setOption] = useState('')

  // const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      detail,
      amount: +amount
    }

    // addTransaction(newTransaction);
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <select name="cars" id="cars">
            <option 
              value={option}
              onChange={(e) => setDetail(e.target.value)}>
                Income
            </option>
            <option 
              value={detail}
              onChange={(e) => setDetail(e.target.value)}>
                Expense
            </option>
          </select>
        </div>
      
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={detail} onChange={(e) => setDetail(e.target.value)} placeholder="Enter text..." />
        </div>

        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}