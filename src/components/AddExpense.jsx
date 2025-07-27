import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function AddExpense(props){
    const { expenses, onAddExpense } = props;
    
    const addExpense = (event) => {
        event.preventDefault();
        const expenseName = event.target.elements[0].value;
        const expenseAmount = parseFloat(event.target.elements[1].value);
        if (expenseName && !isNaN(expenseAmount)) {
        onAddExpense({ name: expenseName, amount: expenseAmount });
        event.target.reset();
        } else {
        console.error('Invalid expense input');
        }
    };
    
    return (
        <div>
        <h2>Add Expense</h2>
        <Form onSubmit={addExpense}>
            <Form.Group controlId="formExpenseName">
            <Form.Label>Expense Reason:</Form.Label>
            <Form.Control type="text" required />
            </Form.Group>
            <Form.Group controlId="formExpenseAmount">
            <Form.Label>Amount:</Form.Label>
            <Form.Control type="number" required />
            </Form.Group>
            <Button type="submit">Add Expense</Button>
        </Form>
        </div>
    );
}