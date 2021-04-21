import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Transaction } from './Transaction';

export default function TransactionList({budgets, toRupiah}) {

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {
          budgets.map(budget => 
            (
              <Transaction key={budgets._id} budget={budget} toRupiah={toRupiah} />
            )
          )
        }
      </ul>
    </>
  )
}