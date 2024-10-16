import React from 'react';
import Header from './components/Header';
import TransactionForm from './components/TransactionForm';
import { BudgetProvider } from './components/BudgetContext';

function App() {
  return (
    <BudgetProvider>
      <div className="App">
        <Header />
        <TransactionForm />
      </div>
    </BudgetProvider>
  );
}

export default App;
