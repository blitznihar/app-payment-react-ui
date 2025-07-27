import Table from 'react-bootstrap/Table';
export default function Equity(props) {
    const { equity } = props;
    return (
        <>
            <h1>Equity</h1>
            <div>
                <p>List the Equity Here</p>
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
            <div>
                <h3>Total Equity: ${equity.reduce((total, item) => total + item.value, 0)}</h3>
            </div>
        </>
    );
}