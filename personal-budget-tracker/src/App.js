import React from 'react';
import Header from './components/Header.jsx';
import Summary from './components/Summary.jsx';
import TransactionForm from './components/TransactionForm.jsx';
import Chart from './components/Chart.jsx';
import TransactionList from './components/TransactionList.jsx';
import { BudgetProvider } from './components/BudgetContext';

function App() {
  return (
    <BudgetProvider>
      <div className="container">
        <Header />
        <div className="row mt-4">
          <div className="col-md-6">
            <Summary />
            <TransactionForm />
          </div>
          <div className="col-md-6">
            <Chart />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <TransactionList />
          </div>
        </div>
      </div>
    </BudgetProvider>
  );
}

export default App;
