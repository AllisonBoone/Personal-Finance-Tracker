import React from 'react';
import Header from './components/Header';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import Summary from './components/Summary';
import Chart from './components/Chart';
import { BudgetProvider } from './components/BudgetContext';

function App() {
  return (
    <BudgetProvider>
      <div className="App">
        <Header />
        <Summary />
        <Chart />
        <TransactionForm />
        <TransactionList />
      </div>
    </BudgetProvider>
  );
}

export default App;
