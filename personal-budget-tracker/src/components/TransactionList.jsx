import React, { useContext } from 'react';
import { BudgetContext } from './BudgetContext';

const TransactionList = () => {
  const { transactions, dispatch } = useContext(BudgetContext);

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  };

  return (
    <ul>
      {transactions.map((transaction) => (
        <li key={transaction.id}>
          {transaction.description} - ${transaction.amount}
          <button onClick={() => handleDelete(transaction.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TransactionList;
