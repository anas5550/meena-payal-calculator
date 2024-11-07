// src/components/ProductRow.jsx
import React from 'react';
import { Input } from 'antd';

const ProductRow = ({ product, onChange }) => {
  return (
    <div className="grid grid-cols-4 gap-2 py-2 items-center">
      <Input
        value={product.name}
        readOnly
        className="bg-indigo-50 font-medium text-indigo-600"
      />
      <Input
        type="number"
        placeholder="Quantity"
        value={product.quantity}
        onChange={(e) => onChange('quantity', e.target.value)}
        className="text-indigo-800"
      />
      <Input
        type="number"
        placeholder="Price"
        value={product.defaultPrice}
        onChange={(e) => onChange('defaultPrice', e.target.value)}
        className="text-indigo-800"
      />
      <Input
        placeholder="Total"
        value={`₹${product.totalAmount.toFixed(2)}`}
        readOnly
        className="bg-indigo-50 text-indigo-700 font-semibold"
      />
    </div>
  );
};

export default ProductRow;
