import React, { useState, useEffect } from 'react';

const PaymentStep2 = ({ data, onChange, onNext, onBack }) => {
  const [errors, setErrors] = useState({});
  const [showFrequency, setShowFrequency] = useState(false);

  useEffect(() => {
    setShowFrequency(data.paymentType && data.paymentType !== 'One-Time');
  }, [data.paymentType]);

  const daysOfWeek = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
  ];

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const validate = () => {
    const newErrors = {};

    if (!data.cardNumber || !/^\d{16}$/.test(data.cardNumber)) {
      newErrors.cardNumber = 'Card number must be 16 digits';
    }

    if (!data.expiry || !/^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(data.expiry)) {
      newErrors.expiry = 'Enter expiry as MM/YY';
    }

    if (!data.cvv || !/^\d{3}$/.test(data.cvv)) {
      newErrors.cvv = 'CVV must be 3 digits';
    }

    if (!data.amount || isNaN(data.amount) || Number(data.amount) <= 0) {
      newErrors.amount = 'Enter a valid amount';
    }

    if (!data.paymentType) {
      newErrors.paymentType = 'Select payment type';
    }

    if (data.paymentType === 'Recurring') {
      if (!data.frequency) {
        newErrors.frequency = 'Select frequency';
      }

      if ((data.frequency === 'Weekly' || data.frequency === 'Bi-Weekly') && !data.weekday) {
        newErrors.weekday = 'Select day of the week';
      }

      if (data.frequency === 'Monthly' && (!data.dayOfMonth || data.dayOfMonth < 1 || data.dayOfMonth > 28)) {
        newErrors.dayOfMonth = 'Enter day of month (1–28)';
      }

      if (data.frequency === 'Yearly') {
        if (!data.yearlyMonth) {
          newErrors.yearlyMonth = 'Select month';
        }
        if (!data.yearlyDay || data.yearlyDay < 1 || data.yearlyDay > 28) {
          newErrors.yearlyDay = 'Enter valid day (1–28)';
        }
      }

      if (!data.firstPaymentDate) {
        newErrors.firstPaymentDate = 'Select first payment date';
      } else if (new Date(data.firstPaymentDate) < new Date()) {
        newErrors.firstPaymentDate = 'First payment date must be in the future';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      onNext();
    }
  };

  return (
    <div>
      <h4>Step 2: Payment Details</h4>

      <div className="mb-3">
        <label>Card Number</label>
        <input
          className={`form-control ${errors.cardNumber ? 'is-invalid' : ''}`}
          value={data.cardNumber}
          onChange={e => onChange('cardNumber', e.target.value)}
          placeholder="1234123412341234"
        />
        <div className="invalid-feedback">{errors.cardNumber}</div>
      </div>

      <div className="mb-3">
        <label>Expiry Date (MM/YY)</label>
        <input
          className={`form-control ${errors.expiry ? 'is-invalid' : ''}`}
          value={data.expiry}
          onChange={e => onChange('expiry', e.target.value)}
          placeholder="MM/YY"
        />
        <div className="invalid-feedback">{errors.expiry}</div>
      </div>

      <div className="mb-3">
        <label>CVV</label>
        <input
          className={`form-control ${errors.cvv ? 'is-invalid' : ''}`}
          value={data.cvv}
          onChange={e => onChange('cvv', e.target.value)}
          placeholder="123"
        />
        <div className="invalid-feedback">{errors.cvv}</div>
      </div>

      <div className="mb-3">
        <label>Amount</label>
        <input
          className={`form-control ${errors.amount ? 'is-invalid' : ''}`}
          value={data.amount}
          onChange={e => onChange('amount', e.target.value)}
        />
        <div className="invalid-feedback">{errors.amount}</div>
      </div>

      <div className="mb-3">
        <label>Payment Type</label>
        <select
          className={`form-select ${errors.paymentType ? 'is-invalid' : ''}`}
          value={data.paymentType || ''}
          onChange={e => onChange('paymentType', e.target.value)}
        >
          <option value="">-- Select Type --</option>
          <option value="One-Time">One-Time</option>
          <option value="Recurring">Recurring</option>
        </select>
        <div className="invalid-feedback">{errors.paymentType}</div>
      </div>

      {showFrequency && (
        <>
          <div className="mb-3">
            <label>Frequency</label>
            <select
              className={`form-select ${errors.frequency ? 'is-invalid' : ''}`}
              value={data.frequency || ''}
              onChange={e => onChange('frequency', e.target.value)}
            >
              <option value="">-- Select Frequency --</option>
              <option value="Weekly">Weekly</option>
              <option value="Bi-Weekly">Bi-Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="Yearly">Yearly</option>
            </select>
            <div className="invalid-feedback">{errors.frequency}</div>
          </div>

          {(data.frequency === 'Weekly' || data.frequency === 'Bi-Weekly') && (
            <div className="mb-3">
              <label>Day of Week</label>
              <select
                className={`form-select ${errors.weekday ? 'is-invalid' : ''}`}
                value={data.weekday || ''}
                onChange={e => onChange('weekday', e.target.value)}
              >
                <option value="">-- Select Day --</option>
                {daysOfWeek.map(day => (
                  <option key={day} value={day}>{day}</option>
                ))}
              </select>
              <div className="invalid-feedback">{errors.weekday}</div>
            </div>
          )}

          {data.frequency === 'Monthly' && (
            <div className="mb-3">
              <label>Day of Month (1–28)</label>
              <input
                type="number"
                min="1"
                max="28"
                className={`form-control ${errors.dayOfMonth ? 'is-invalid' : ''}`}
                value={data.dayOfMonth || ''}
                onChange={e => onChange('dayOfMonth', e.target.value)}
              />
              <div className="invalid-feedback">{errors.dayOfMonth}</div>
            </div>
          )}

          {data.frequency === 'Yearly' && (
            <>
              <div className="mb-3">
                <label>Month</label>
                <select
                  className={`form-select ${errors.yearlyMonth ? 'is-invalid' : ''}`}
                  value={data.yearlyMonth || ''}
                  onChange={e => onChange('yearlyMonth', e.target.value)}
                >
                  <option value="">-- Select Month --</option>
                  {months.map(month => (
                    <option key={month} value={month}>{month}</option>
                  ))}
                </select>
                <div className="invalid-feedback">{errors.yearlyMonth}</div>
              </div>

              <div className="mb-3">
                <label>Day of Month (1–28)</label>
                <input
                  type="number"
                  min="1"
                  max="28"
                  className={`form-control ${errors.yearlyDay ? 'is-invalid' : ''}`}
                  value={data.yearlyDay || ''}
                  onChange={e => onChange('yearlyDay', e.target.value)}
                />
                <div className="invalid-feedback">{errors.yearlyDay}</div>
              </div>
            </>
          )}

          <div className="mb-3">
            <label>Date of First Payment</label>
            <input
              type="date"
              className={`form-control ${errors.firstPaymentDate ? 'is-invalid' : ''}`}
              value={data.firstPaymentDate || ''}
              onChange={e => onChange('firstPaymentDate', e.target.value)}
            />
            <div className="invalid-feedback">{errors.firstPaymentDate}</div>
          </div>
        </>
      )}

      <button className="btn btn-secondary me-2" onClick={onBack}>Back</button>
      <button className="btn btn-primary" onClick={handleNext}>Next</button>
    </div>
  );
};

export default PaymentStep2;
