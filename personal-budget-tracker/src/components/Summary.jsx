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
    <div className="card mb-4">
      <div className="card-body">
        <div className="row">
          <div className="col text-center">
            <h5>Income</h5>
            <p className="text-success">${income}</p>
          </div>
          <div className="col text-center">
            <h5>Expenses</h5>
            <p className="text-danger">${Math.abs(expense)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
