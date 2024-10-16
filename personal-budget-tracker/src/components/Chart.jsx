import React, { useContext, useRef, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { BudgetContext } from './BudgetContext';

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = () => {
  const { transactions } = useContext(BudgetContext);
  const chartRef = useRef(null);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0);

  const data = {
    labels: ['Income', 'Expenses'],
    datasets: [
      {
        label: 'Income vs Expenses',
        data: [income, Math.abs(expense)],
        backgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  useEffect(() => {
    const chartInstance = chartRef.current;

    if (!chartInstance) {
      return;
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div>
      <Pie data={data} ref={chartRef} />
    </div>
  );
};

export default Chart;
