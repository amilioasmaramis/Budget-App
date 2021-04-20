import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
// import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  // const { transactions } = useContext(GlobalContext);
  const transactions = useSelector(state => state.budget.transactions)
  console.log(transactions)

  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);

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
    <div>
      <h4>Your Balance</h4>
      <h1>{moneyFormatter(total)}</h1>
    </div>
  )
}