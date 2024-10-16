import React, { createContext, useReducer, useEffect } from 'react';

const initialState = {
  transactions: JSON.parse(localStorage.getItem('transactions')) || [],
};

export const BudgetContext = createContext(initialState);

const budgetReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export const BudgetProvider = ({ children }) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState);

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(state.transactions));
  }, [state.transactions]);

  return (
    <BudgetContext.Provider
      value={{ transactions: state.transactions, dispatch }}
    >
      {' '}
      {children}
    </BudgetContext.Provider>
  );
};
