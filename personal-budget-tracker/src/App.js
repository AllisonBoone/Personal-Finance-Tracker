import React from 'react';
import Header from './components/Header';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import { BudgetProvider } from './components/BudgetContext';

function App() {
  return (
    <BudgetProvider>
      <div className="App">
        <Header />
        <TransactionForm />
        <TransactionList />
      </div>
    </BudgetProvider>
  );
}

export default App;
