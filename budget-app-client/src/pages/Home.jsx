import React, { useEffect } from 'react'

import Navbar from '../components/Navbar/Navbar'
import Balance from '../components/Balance'
import IncomeExpense from '../components/IncomeExpense'
import TransactionList from '../components/TransactionList'
import AddTransaction from '../components/AddTransaction'

import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { fetchBudgets } from '../store/actions'


export default function Home() {
  const dispatch = useDispatch()
  const history = useHistory()
  const user = localStorage.getItem('username')
  const budgets = useSelector(state => state.budget.budgets)

  let totalIncome = 0
  let totalExpense = 0
  let totalBalance = 0

  for (let i = 0; i < budgets.length; i++) {
    if (budgets[i].hasOwnProperty('income')) {
      totalIncome += Number(budgets[i].income)
    } else {
      totalExpense += Number(budgets[i].expense)
    }
  }
  totalBalance = totalIncome - totalExpense

  useEffect(() => {
    dispatch(fetchBudgets())
  }, [dispatch])

  useEffect(() => {
    if (!localStorage.getItem('access_token')) {
      history.push('/login')
    }
  }, [history])

  function toRupiah(angka) {
    var rupiah = '';		
    var angkarev = angka.toString().split('').reverse().join('');
    for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
    return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('')+',00';
  }

  return (
    <>
      <Navbar />
      <h2>Budget Application</h2>
      <div className="container">
        <Balance totalBalance={totalBalance} toRupiah={toRupiah} />
        <IncomeExpense totalIncome={totalIncome} totalExpense={totalExpense} toRupiah={toRupiah} />
        <TransactionList budgets={budgets} toRupiah={toRupiah} />
        <AddTransaction />
      </div>
    </>
  )
}