import React, { useState, useContext } from 'react';
import { BudgetContext } from './BudgetContext';

const TransactionForm = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const { dispatch } = useContext(BudgetContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      description,
      amount: +amount,
    };

    dispatch({ type: 'ADD_TRANSACTION', payload: newTransaction });

    setDescription('');
    setAmount(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
