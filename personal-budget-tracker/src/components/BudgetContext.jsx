import React, { createContext, userReducer } from 'react';

const initialState = {
  transactions: [],
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
  const [state, dispatch] = userReducer(budgetReducer, initialState);
  return (
    <BudgetContext.Provider
      value={{ transactions: state.transactions, dispatch }}
    >
      {' '}
      {children}
    </BudgetContext.Provider>
  );
};
