import React, { useContext } from 'react';
import { BudgetContext } from './BudgetContext';

const Header = () => {
  const { transactions } = useContext(BudgetContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <header>
      <h1>Personal Budget Tracker</h1>
      <h2>Balance: ${total}</h2>
    </header>
  );
};

export default Header;
