import React, { useContext } from 'react';
import { BudgetContext } from './BudgetContext';

const Summary = () => {
  const { transactions } = useContext(BudgetContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div>
      <div>
        <h3>Income</h3>
        <p>${income}</p>
      </div>
      <h3>Expenses</h3>
      <p>${Math.ads(expense)}</p>
    </div>
  );
};

export default Summary;
