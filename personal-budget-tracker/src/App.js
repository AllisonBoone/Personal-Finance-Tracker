import React from 'react';
import Header from './components/Header.jsx';
import Summary from './components/Summary.jsx';
import TransactionForm from './components/TransactionForm.jsx';
import TransactionList from './components/TransactionList.jsx';
import Chart from './components/Chart.jsx';
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
