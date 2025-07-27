import Table from 'react-bootstrap/Table';
export default function Assets(props){

    const { assets } = props;
    return (
        <>
        <h1>Assets</h1>
        <div><p>List the Assets Here</p>
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
                <td >{asset.name}</td>
                <td>${asset.value}</td>
                </tr>
            ))}
        </tbody>
        </Table>
        </div>
        <div>
            <h3>Total Assets: ${assets.reduce((total, asset) => total + asset.value, 0)}</h3>
        </div>
        </>
    )
}