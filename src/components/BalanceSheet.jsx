import Table from "react-bootstrap/Table";
import Accordion  from "react-bootstrap/Accordion";
export default function BalanceSheet(props) {
  const { expenses, assets, equity } = props;

  return (
    <>
        <div>
          <h2>Balance Sheet</h2>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Assets: ${assets.reduce((total, asset) => total + asset.value, 0)}</Accordion.Header>
              <Accordion.Body>
                <div>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Asset Name</th>
                        <th>Asset Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {assets.map((asset, index) => (
                        <tr key={index}>
                          <td>{asset.name}</td>
                          <td>${asset.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Expenses: ${expenses.reduce((total, expense) => total + expense.amount, 0)}</Accordion.Header>
              <Accordion.Body>
                <div>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Expense Name</th>
                        <th>Expense Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {expenses.map((expense, index) => (
                        <tr key={index}>
                          <td>{expense.name}</td>
                          <td>${expense.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Equity: ${equity.reduce((total, item) => total + item.value, 0)}</Accordion.Header>
              <Accordion.Body>
                <div>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Equity Name</th>
                        <th>Equity Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {equity.map((item, index) => (
                        <tr key={index}>
                          <td>{item.name}</td>
                          <td>${item.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Net Worth: $
                    {assets.reduce((total, asset) => total + asset.value, 0) -
                    expenses.reduce((total, expense) => total + expense.amount, 0) +
                    equity.reduce((total, item) => total + item.value, 0)}</Accordion.Header>
              <Accordion.Body>
                <div>
                  <h3>
                    Net Worth: $
                    {assets.reduce((total, asset) => total + asset.value, 0) -
                    expenses.reduce((total, expense) => total + expense.amount, 0) +
                    equity.reduce((total, item) => total + item.value, 0)}
                  </h3>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

    </>
  );
}
