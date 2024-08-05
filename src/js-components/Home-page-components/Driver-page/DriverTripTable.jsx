
const DriverTripTable = () => {
    const numRows = 6;
    const numCols = 6;

    const createTable = () => {
        let table = [];

        // Create rows
        for (let i = 0; i < numRows; i++) {
            let children = [];

            // Create columns in each row
            for (let j = 0; j < numCols; j++) {
                children.push(<td key={j}>{`Row ${i + 1} Col ${j + 1}`}</td>);
            }

            // Add the row to the table
            table.push(<tr key={i}>{children}</tr>);
        }
    }


    return (
        <section className="drivertriptable">
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>Driver Name</th>
                        <th>Trip</th>
                        <th>Start  Time</th>
                        <th>End Time</th>
                        <th>Trip Duration</th>
                        <th>Ratings</th>
                        <th>...</th>
                    </tr>
                </thead>
                <tbody>
                    {createTable()}
                </tbody>
            </table>
        </section>
    )
}

export default DriverTripTable