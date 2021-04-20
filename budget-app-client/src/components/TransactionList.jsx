import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Transaction } from './Transaction';

// import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  // const { transactions } = useContext(GlobalContext);
  const transactions = useSelector(state => state.budget.transactions)
  console.log(transactions)

  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(read)
  // })

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {
          transactions.map(transaction => 
            (
              <Transaction key={transaction.id} transaction={transaction} />
            )
          )
        }
      </ul>
    </>
  )
}