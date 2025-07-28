import React, { useState } from 'react';
import PaymentStep1 from './PaymentStep1';
import PaymentStep2 from './PaymentStep2';
import PaymentStep3 from './PaymentStep3';
import 'bootstrap/dist/css/bootstrap.min.css';

const MakePayment = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    amount: '',
    paymentType: '',
    frequency: '',
    weekday: '',
    dayOfMonth: '',
    yearlyMonth: '',
    yearlyDay: '',
    firstPaymentDate: '',
  });

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="card shadow p-4">
        <h2 className="mb-4 text-center">Make a Payment</h2>

        {/* Step Indicator */}
        <div className="mb-4 text-center">
          <span className={`badge me-2 ${step === 1 ? 'bg-primary' : 'bg-secondary'}`}>1</span>
          <span className={`badge me-2 ${step === 2 ? 'bg-primary' : 'bg-secondary'}`}>2</span>
          <span className={`badge ${step === 3 ? 'bg-primary' : 'bg-secondary'}`}>3</span>
        </div>

        {/* Dynamic Step Component */}
        {step === 1 && (
          <PaymentStep1
            data={formData}
            onChange={handleChange}
            onNext={handleNext}
          />
        )}

        {step === 2 && (
          <PaymentStep2
            data={formData}
            onChange={handleChange}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}

        {step === 3 && (
          <PaymentStep3
            data={formData}
            onBack={handleBack}
          />
        )}
      </div>
    </div>
  );
};

export default MakePayment;