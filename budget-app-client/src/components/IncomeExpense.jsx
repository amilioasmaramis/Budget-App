import React, { useContext } from 'react';
// import { GlobalContext } from '../context/GlobalState';
import { useSelector } from 'react-redux'



export default function IncomeExpense({totalIncome, totalExpense, toRupiah}) {

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{toRupiah(totalIncome)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{toRupiah(totalExpense)}</p>
      </div>
  </div>
  )
}