import React from 'react';

const PaymentStep3 = ({ data, onBack }) => {
  const handleSubmit = () => {
    alert(`Payment of $${data.amount} submitted by ${data.name}`);
  };

  return (
    <div>
      <h4>Step 3: Confirm Payment</h4>
      <ul className="list-group mb-3">
        <li className="list-group-item">Name: {data.name}</li>
        <li className="list-group-item">Email: {data.email}</li>
        <li className="list-group-item">Card Number: {data.cardNumber}</li>
        <li className="list-group-item">Expiry: {data.expiry}</li>
        <li className="list-group-item">Amount: ${data.amount}</li>
      </ul>
      <button className="btn btn-secondary me-2" onClick={onBack}>Back</button>
      <button className="btn btn-success" onClick={handleSubmit}>Submit Payment</button>
    </div>
  );
};

export default PaymentStep3;
