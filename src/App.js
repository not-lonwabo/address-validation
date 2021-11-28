import React from 'react';
import './App.css';
import AddressForm from 'addressForm';

function App() {
  return (
    <div className="App">
      <button>Residential</button>
      <button>Business</button>
      <button>Farm</button>
      <AddressForm />
    </div>
  );
}

export default App;
