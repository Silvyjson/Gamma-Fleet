import totalExpensesImage from "../../../assets/totalExpensesImage.png"
import monthlyBudgetImage from "../../../assets/monthlyBudgetImage.png"

const MonthlyBudget = () => {
    return (
        <section className="db-monthly-budget">
            <div>
                <h3>Monthly Budget</h3>
                <div className="budget-container">
                    <div className="bd-image">
                        <img src={monthlyBudgetImage} alt="monthly budget icon" />
                    </div>
                    <div className="bd-detail">
                        <p>5,000,000 NGN</p>
                        <meter value="0" min="0" max="100"></meter>
                        <p>used 0%</p>
                    </div>
                </div>
            </div>
            <div>
                <h3>Total Expenses</h3>
                <div className="budget-container">
                    <div className="bd-image">
                        <img src={totalExpensesImage} alt="total Expenses Image" />
                    </div>
                    <div className="bd-detail">
                        <p>_ _NGN</p>
                        <meter value="0" min="0" max="100"></meter>
                        <p>0%</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MonthlyBudget