import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Expense from "./Expense.jsx";
import AddExpense from "./AddExpense.jsx";
import Assets from "./Assets.jsx";
import Accordion from "react-bootstrap/Accordion";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Equity from "./Equity.jsx";
import BalanceSheet from "./BalanceSheet.jsx";
import Hello from "./Hello.jsx";
import Stack from 'react-bootstrap/Stack';

const initialExpenses = [
  { name: "Rent", amount: 1200 },
  { name: "Utilities", amount: 300 },
];

const initialAssets = [
  { name: "Car", value: 15000 },
  { name: "House", value: 250000 },
  { name: "Savings", value: 5000 },
];
const initialEquity = [
  { name: "Equity in Home", value: 50000 },
  { name: "Stocks", value: 20000 },
  { name: "Retirement Fund", value: 30000 },
];
function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [assets, setAssets] = useState(initialAssets);
  const [equity, setEquity] = useState(initialEquity);
  const handleAddExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
    console.log("New expense added:", newExpense);
  };
  const handleAddAsset = (newAsset) => {
    setAssets(prevAssets => [...prevAssets, newAsset]);
    console.log('New asset added:', newAsset);
  };
  const handleAddEquity = (newEquity) => {
    setEquity(prevEquity => [...prevEquity, newEquity]);
    console.log('New equity added:', newEquity);
  };

  return (
    <>

      <div className="container mt-5" data-bs-theme="dark">
    <Tabs defaultActiveKey="balanceSheet" id="uncontrolled-tab-example" className="mb-3">
      <Tab eventKey="balanceSheet" title="Balance Sheet">
        <div>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Balance Sheet</Accordion.Header>
              <Accordion.Body>
                <div>
                  <BalanceSheet
                    expenses={expenses}
                    assets={assets}
                    equity={equity}
                  />
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Tab>
      <Tab eventKey="assets" title="Assets">
        <div>
        <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Assets</Accordion.Header>
          <Accordion.Body>
            <div>
              <Assets assets={assets} />
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </div>
      </Tab>
      <Tab eventKey="expenses" title="Expenses">
        <div>
        <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Expenses</Accordion.Header>
          <Accordion.Body>
            <div>
              <Expense expenses={expenses} />
              
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Add Expenses</Accordion.Header>
          <Accordion.Body>
            <div>
              <AddExpense expenses={expenses} onAddExpense={handleAddExpense} />
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </div>
      </Tab>
      
      <Tab eventKey="equity" title="Equity">
        <div>
         <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Equity</Accordion.Header>
          <Accordion.Body>
            <div>
              <Equity equity={equity} />
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </div>
      </Tab>
      <Tab eventKey="hello" title="Hello">
        <div>
          <h2>Hello Component</h2>
          <p>This is a placeholder for the Hello component.</p>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Click the button to toggle message</Accordion.Header>
              <Accordion.Body>
                 {/* <Stack gap={2}>  */}
                  <div className="me-auto">
                <Hello buttonText="Click Me" message="Hello World" />
                </div>
                <hr/>
                <div className="me-auto">
                <Hello buttonText="Clickeme" message="Hola Mundo" />
                </div>
                <hr/>
                <div className="me-auto">
                <Hello buttonText="Yaha Dabao" message="Namaste Duniya" />
                </div>
              {/* </Stack> */}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Tab>
      </Tabs>
      </div>
      {/* <Hello buttonText="Click Me" message="Hello World" />
      <Hello buttonText="Clickeme" message="Hola Mundo" />
      <Hello buttonText="Yaha Dabao" message="Namaste Duniya" /> */}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
