// src/App.jsx
import React, { useState } from 'react';
import 'antd/dist/reset.css';
import './index.css';
import Section from './Section';

const App = () => {
  const [payalTotal, setPayalTotal] = useState(0);
  const [powjebTotal, setPowjebTotal] = useState(0);

  const combinedGrandTotal = payalTotal + powjebTotal;

  return (
    <div className="min-h-screen bg-gray-100 p-1 flex flex-col items-center">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-0 space-y-4">
        <div className="flex justify-between items-center mb-4 px-2">
          <h1 className="text-xl font-bold text-indigo-600">Meena Payal</h1>
          <h3 className="text-lg font-semibold text-indigo-800">
            Grand Total: ₹{combinedGrandTotal.toFixed(2)}
          </h3>
        </div>
   
        <Section title="Payal" products={[
          { name: "Super Payal", defaultPrice: 11 },
          { name: "Medium Payal", defaultPrice: 10 },
          { name: "Baccha Payal", defaultPrice: 7 },
          { name: "Pawdha Medium", defaultPrice: 7 },
        ]} onTotalChange={setPayalTotal} />
        
        <Section title="Powjeb" products={[
          { name: "Super Powjeb", defaultPrice: 30 },
          { name: "Medium Powjeb", defaultPrice: 20 },
          { name: "Baccha Powjeb", defaultPrice: 15 },
        ]} onTotalChange={setPowjebTotal} />
      </div>
    </div>
  );
};

export default App;
