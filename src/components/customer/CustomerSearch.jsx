import React from 'react';
import { useState } from 'react';   

const customerData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', paymentDetails: { amount: 120, status: 'Paid', schedule: null } },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', paymentDetails: { amount: 200, status: 'Pending', schedule: '2024-07-10' } },
  { id: 3, name: 'Alice Johnson', email: 'alice@example.com', paymentDetails: { amount: 150, status: 'Paid', schedule: null } },
  { id: 4, name: 'Bob Brown', email: 'bob@example.com', paymentDetails: { amount: 80, status: 'Failed', schedule: null } },
  { id: 5, name: 'Charlie White', email: 'charlie@example.com', paymentDetails: { amount: 300, status: 'Paid', schedule: null } },
  { id: 6, name: 'Diana Prince', email: 'diana@example.com', paymentDetails: { amount: 250, status: 'Pending', schedule: '2024-07-15' } },
  { id: 7, name: 'Bruce Wayne', email: 'bruce@example.com', paymentDetails: { amount: 500, status: 'Paid', schedule: null } },
  { id: 8, name: 'Clark Kent', email: 'clark@example.com', paymentDetails: { amount: 400, status: 'Paid', schedule: null } }
];

export default function CustomerSearch(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const handleSearch = () => {

    const filteredResults = customerData.filter(customer =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filteredResults);
    console.log('Search results:', filteredResults);
    if (filteredResults.length === 0) {
      alert('No customers found');
    }
    else {
      alert(`${filteredResults.length} customer(s) found`);
    }
    setSearchTerm(''); // Clear the search input after search
    props.onSearch(filteredResults); // Call the parent component's onSearch function if provided
  };

  return (
    <div>
      <h2>Customer Search</h2>
      <input
        type="text"
        placeholder="Search by name or email"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {results.map((customer) => (
          <li key={customer.id}>
            <a href={`/customerPaymentdetails/${customer.id}`}>
              {customer.name} - {customer.email}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
