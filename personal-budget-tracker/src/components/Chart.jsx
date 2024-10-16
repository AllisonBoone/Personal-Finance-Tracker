import React, { useContext } from 'react';
import { Pie } from 'react-chartjs-2';
import { BudgetContext } from './BudgetContext';

const Chart = () => {
  const { transactions } = useContext.map(BudgetContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0);

  const data = {
    labels: ['Income vs Expenses'],
    datasets: [
      {
        label: 'Income vs Expenses',
        data: [income, Math.abs(expense)],
        backgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  return <Pie data={data} />;
};

export default Chart;
