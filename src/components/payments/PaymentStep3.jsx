import React from 'react';

const PaymentStep3 = ({ data, onBack }) => {
  const handleSubmit = () => {
    alert(`Payment of $${data.amount} submitted successfully!`);
    console.log('Final data:', data);
  };

  return (
    <div>
      <h4>Step 3: Confirm and Submit</h4>
      <ul className="list-group mb-3">
        <li className="list-group-item">Name: {data.name}</li>
        <li className="list-group-item">Email: {data.email}</li>
        <li className="list-group-item">Card Number: **** **** **** {data.cardNumber.slice(-4)}</li>
        <li className="list-group-item">Expiry: {data.expiry}</li>
        <li className="list-group-item">Amount: ${data.amount}</li>
        <li className="list-group-item">Payment Type: {data.paymentType}</li>

        {data.paymentType === 'Recurring' && (
          <>
            <li className="list-group-item">Frequency: {data.frequency}</li>

            {['Weekly', 'Bi-Weekly'].includes(data.frequency) && (
              <li className="list-group-item">Day: {data.weekday}</li>
            )}

            {data.frequency === 'Monthly' && (
              <li className="list-group-item">Day of Month: {data.dayOfMonth}</li>
            )}

            {data.frequency === 'Yearly' && (
              <li className="list-group-item">
                Yearly Date: {data.yearlyMonth} {data.yearlyDay}
              </li>
            )}

            <li className="list-group-item">First Payment Date: {data.firstPaymentDate}</li>
          </>
        )}
      </ul>

      <button className="btn btn-secondary me-2" onClick={onBack}>
        Back
      </button>
      <button className="btn btn-success" onClick={handleSubmit}>
        Submit Payment
      </button>
    </div>
  );
};

export default PaymentStep3;
