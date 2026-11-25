
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
    Legend
} from "recharts";

function ExpenseChart({ transactions }) {

    const monthlyData = {};

    transactions.forEach((item) => {

        const date = new Date(item.date);

        const month = date.toLocaleString("en-IN", {
            month: "short",
            year: "numeric"
        });

        if (!monthlyData[month]) {
            monthlyData[month] = {
                month,
                income: 0,
                expense: 0
            };
        }

        if (item.type === "income") {
            monthlyData[month].income += Number(item.amount);
        } else {
            monthlyData[month].expense += Number(item.amount);
        }

    });

    const chartData = Object.values(monthlyData);

    return (
        <div className="card p-4 shadow-sm mt-4">

            <h4>Monthly Income & Expenses</h4>

            <ResponsiveContainer width="100%" height={350}>
                <BarChart data={chartData}>

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="month" />

                    <YAxis />

                    <Tooltip />

                    <Legend />

                    <Bar
                        dataKey="income"
                        fill="#198754"
                        name="Income"
                    />

                    <Bar
                        dataKey="expense"
                        fill="#dc3545"
                        name="Expense"
                    />

                </BarChart>
            </ResponsiveContainer>

        </div>
    );
}

export default ExpenseChart;
