import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBudgets } from '../store/actions';

export default function Balance({totalBalance, toRupiah}) {
  const dispatch = useDispatch()
  
  return (
    <div>
      <h4>Your Balance</h4>
      {/* <h1>{moneyFormatter(total)}</h1> */}
      <h1>{toRupiah(totalBalance)}</h1>
    </div>
  )
}