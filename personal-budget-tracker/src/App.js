import React from 'react';
import Header from './components/Header';
import { BudgetProvider } from './components/BudgetContext';

function App() {
  return (
    <BudgetProvider>
      <div className="App">
        <Header />
      </div>
    </BudgetProvider>
  );
}

export default App;
