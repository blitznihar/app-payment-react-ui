export default function CustomerPaymentDetails(props) {
    const { customerName } = props;
    return (
        <>
            <h1>Customer Payment Details</h1>
            <div>
                <p>Customer Name: {customerName}</p>
            </div>
            <div>
                <p>List the payment details here.</p>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Payment Date</th>
                            <th>Payment Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Payment details will be listed here */}
                        {/* Example row, replace with dynamic data */}
                        <tr>
                            <td>2023-10-01</td>
                            <td>$100.00</td>
                        </tr>
                        <tr>
                            <td>2023-10-15</td>
                            <td>$150.00</td>
                        </tr>
                        <tr>
                            <td>2023-10-30</td>
                            <td>$200.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}