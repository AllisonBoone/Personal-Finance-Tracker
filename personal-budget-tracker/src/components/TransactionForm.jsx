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
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn">
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;
