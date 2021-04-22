import React, {useState, useContext} from 'react'
import { useDispatch } from 'react-redux';
import { addIncome, addExpense } from '../store/actions'

export default function AddTransaction() {
  const [detail, setDetail] = useState('');
  const [amount, setAmount] = useState(0);
  const [option, setOption] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    console.log(option, detail, amount, 'dari component <<<<<')
    e.preventDefault()
    if (option == "Income") {
      dispatch(addIncome({ detail, amount }))
      setOption('')
      setDetail('')
      setAmount(0)
    } else if(option == "Expense") {
      dispatch(addExpense({ detail, amount }))
      setOption('')
      setDetail('')
      setAmount(0)
    } else {
      alert('Inputan harus diisi')
    }
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-control">
          <select
            className="select-option"
            value={option}
            onChange={(e) => setOption(e.target.value)}
          >
            <option disabled value="">
              Select Option
            </option>
            <option>Income</option>
            <option>Expense</option>
          </select>
        </div>
      
        <div className="form-control">
          <label htmlFor="text">Description</label>
          <input type="text" value={detail} onChange={(e) => setDetail(e.target.value)} placeholder="Enter description..." />
        </div>

        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}