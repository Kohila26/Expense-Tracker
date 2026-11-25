
function TransactionList({ transactions, onDelete, onEdit }) {

    return (
        <div className="card p-4 shadow-sm mt-4">

            <h4>Transaction History</h4>

            <div className="table-responsive">
                <table className="table table-bordered table-hover">

                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Type</th>
                            <th>Category</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {transactions.length === 0 ? (
                            <tr>
                                <td colSpan="6" className="text-center">
                                    No transactions found
                                </td>
                            </tr>
                        ) : (
                            transactions.map((item) => (
                                <tr key={item._id}>
                                    <td>{item.title}</td>
                                    <td>{item.type}</td>
                                    <td>{item.category}</td>
                                    <td>₹{item.amount}</td>
                                    <td>
                                        {new Date(item.date).toLocaleDateString()}
                                    </td>
                                    <td>
                                        <button
                                            className="btn btn-warning btn-sm me-2"
                                            onClick={() => onEdit(item)}
                                        >
                                            Edit
                                        </button>

                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => onDelete(item._id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>

                </table>
            </div>

        </div>
    );
}

export default TransactionList;
