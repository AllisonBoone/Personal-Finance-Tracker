import React, { useContext } from 'react';
import { BudgetContext } from './BudgetContext';

const Header = () => {
  const { transactions } = useContext(BudgetContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <header className="d-flex justify-content-between align-items-center py-3">
      <h1 className="h3">Personal Budget Tracker</h1>
      <h2 className="h5 text-primary">Balance: ${total}</h2>
    </header>
  );
};

export default Header;
