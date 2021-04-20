import React from 'react'
import { Balance } from '../components/Balance'
import { Income } from '../components/IncomeExpense'
import { TransactionList } from '../components/TransactionList'
import { AddTransaction } from '../components/AddTransaction'

export default function Home() {
  return (
    <section>
      <h2>Budget Application</h2>
      <div className="container">
        <Balance />
        <Income />
        <TransactionList />
        <AddTransaction />
      </div>
    </section>
  )
}