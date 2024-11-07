// src/components/Section.jsx
import React, { useState, useEffect } from 'react';
import { Card, Button } from 'antd';
import ProductRow from './ProductRow';

const Section = ({ title, products, onTotalChange }) => {
  const [productData, setProductData] = useState(
    products.map((product) => ({
      ...product,
      quantity: 0,
      totalAmount: 0,
    }))
  );

  useEffect(() => {
    const grandTotal = productData.reduce((acc, product) => acc + product.totalAmount, 0);
    onTotalChange(grandTotal);
  }, [productData, onTotalChange]);

  const handleProductChange = (index, field, value) => {
    const newProductData = [...productData];
    const product = newProductData[index];
    product[field] = parseFloat(value) || 0;
    product.totalAmount = product.quantity * product.defaultPrice;
    setProductData(newProductData);
  };

  const resetData = () => {
    setProductData(products.map((product) => ({
      ...product,
      quantity: 0,
      totalAmount: 0,
    })));
  };

  return (
    <Card title={<span className="text-lg font-semibold text-indigo-700">{title}</span>} className="shadow-md border border-indigo-200">
      {productData.map((product, index) => (
        <ProductRow
          key={index}
          product={product}
          onChange={(field, value) => handleProductChange(index, field, value)}
        />
      ))}
      <div className="mt-4 flex justify-between items-center">
        <span className="text-md font-bold text-indigo-800">Total {title}: ₹{productData.reduce((acc, p) => acc + p.totalAmount, 0)}</span>
        <Button type="primary" danger onClick={resetData}>
          Zero
        </Button>
      </div>
    </Card>
  );
};

export default Section;
