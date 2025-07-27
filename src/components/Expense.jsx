import Table from 'react-bootstrap/Table';
export default function Expense(props) {
  const { expenses } = props;
  const expensesList = expenses.sort((a, b) => b.amount - a.amount);
  const addExpense = (event) => {
    event.preventDefault();
    const expenseName = event.target.elements[0].value;
    const expenseAmount = parseFloat(event.target.elements[1].value);
    if (expenseName && !isNaN(expenseAmount)) {
      expensesList.push({ name: expenseName, amount: expenseAmount });
      event.target.reset();
      // Optionally, you can re-render the component or update state to reflect the new expense
      console.log('Expense added:', { name: expenseName, amount: expenseAmount });
    } else {
      console.error('Invalid expense input');
    }
  };
  return (
    <>
      <div>
        <h2>Expense Component</h2>
      </div>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Expense Name</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {expensesList.map((expense, index) => (
              <tr key={index}>
                <td>{expense.name}</td>
                <td>${expense.amount}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div>
        <h3>
          Total Expenses: $
          {expensesList.reduce((total, expense) => total + expense.amount, 0)}
        </h3>
      </div>
    </>
  );
}
