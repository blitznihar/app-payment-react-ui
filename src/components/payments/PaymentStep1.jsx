import React, { useState } from 'react';

const PaymentStep1 = ({ data, onChange, onNext }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!data.name || data.name.trim().length < 2) {
      newErrors.name = 'Name is required (min 2 characters)';
    }
    if (
      !data.email ||
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)
    ) {
      newErrors.email = 'Enter a valid email address';
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
      <h4>Step 1: Personal Details</h4>

      <div className="mb-3">
        <label>Name</label>
        <input
          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          value={data.name}
          onChange={(e) => onChange('name', e.target.value)}
        />
        <div className="invalid-feedback">{errors.name}</div>
      </div>

      <div className="mb-3">
        <label>Email</label>
        <input
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          value={data.email}
          onChange={(e) => onChange('email', e.target.value)}
        />
        <div className="invalid-feedback">{errors.email}</div>
      </div>

      <button className="btn btn-primary" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default PaymentStep1;
