import React, { useContext } from 'react';
import { BudgetContext } from './BudgetContext';

const TransactionList = () => {
  const { transactions, dispatch } = useContext(BudgetContext);

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Transactions</h5>
        <ul className="list-group">
          {transactions.map((transaction) => (
            <li
              key={transaction.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span>{transaction.description}</span>
              <span>
                {transaction.amount > 0 ? (
                  <span className="text-success">${transaction.amount}</span>
                ) : (
                  <span className="text-danger">
                    ${Math.abs(transaction.amount)}
                  </span>
                )}
                <button
                  onClick={() => handleDelete(transaction.id)}
                  className="btn btn-danger bnt-sm ms-3"
                >
                  Delete
                </button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TransactionList;
