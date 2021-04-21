import React, {useContext} from 'react';
// import { GlobalContext } from '../context/GlobalState';
import { useSelector } from 'react-redux'

export const Transaction = ({ budget, toRupiah }) => {
  console.log(budget)
  const deleteTransaction = (id) => {
    // return {
    //   ...transactions,
    //   transactions: transactions.filter(transaction => transaction.id !== id)
    // }
  }

  const signBudget = budget.hasOwnProperty('income') ? '+' : '-';

  return (
    // <h1>transaksi history</h1>
    <li className={budget.hasOwnProperty('income') ? 'minus' : 'plus'}>
      {budget.detail} 
      <span>{signBudget} {toRupiah(budget.hasOwnProperty('income') ? budget.income : budget.expense )}</span>
      <button onClick={() => deleteTransaction(budget._id)} className="delete-btn" />
      <button className="delete-btn">
        x
      </button>
    </li>
  )
}