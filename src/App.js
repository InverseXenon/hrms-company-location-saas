import React from 'react';
import Header from './components/Header';
import CompanyRegistration from './components/CompanyRegistration';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <CompanyRegistration />
      </main>
    </div>
  );
}

export default App; 