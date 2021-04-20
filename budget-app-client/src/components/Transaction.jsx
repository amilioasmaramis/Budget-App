import React, {useContext} from 'react';
// import { GlobalContext } from '../context/GlobalState';
import { useSelector } from 'react-redux'

export const Transaction = ({ transaction }) => {
  // const { deleteTransaction } = useContext(GlobalContext);
  const transactions = useSelector(state => state.budget.transactions)
  console.log(transactions)
  const deleteTransaction = (id) => {
    return {
      ...transactions,
      transactions: transactions.filter(transaction => transaction.id !== id)
    }
  }

  const sign = transaction.amount < 0 ? '-' : '+';

  //Money formatter function
  function moneyFormatter(num) {
    let p = num.toFixed(2).split('.');
    return (
      '$ ' +
      p[0]
        .split('')
        .reverse()
        .reduce(function (acc, num, i, orig) {
          return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
        }, '') +
      '.' +
      p[1]
    );
  }

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} 
      <span>{sign}{moneyFormatter(transaction.amount)}</span>
      <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn" />
      <button className="delete-btn">
        x
      </button>
    </li>
  )
}