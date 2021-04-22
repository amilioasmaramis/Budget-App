import React, {useContext} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { deleteBudget } from '../store/actions'

export const Transaction = ({ budget, toRupiah }) => {
  const dispatch = useDispatch()
  const deleteTransaction = (id) => {
    dispatch(deleteBudget({ id }))
  }

  const signBudget = budget.hasOwnProperty('income') ? '+' : '-';

  return (
    // <h1>transaksi history</h1>
    <li className={budget.hasOwnProperty('income') ? 'minus' : 'plus'}>
      {budget.detail} 
      <span>{signBudget} {toRupiah(budget.hasOwnProperty('income') ? budget.income : budget.expense )}
      </span>
      <button 
        class="button" 
        data-content="Delete" 
        type="button"
        onClick={() => deleteTransaction(budget._id)}
      >
          <svg fill="currentColor" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 16 16" width="16" height="16">
            <path 
              fill-rule="evenodd" 
              d="M7.78 12.53a.75.75 0 01-1.06 0L2.47 8.28a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 1.06L4.81 7h7.44a.75.75 0 010 1.5H4.81l2.97 2.97a.75.75 0 010 1.06z">
            </path>
          </svg>
      </button>
      {/* <button 
        onClick={() => deleteTransaction(budget._id)}
        style={{ width: 100, height: 5 }}
      >
        x
      </button> */}

    </li>
  )
}