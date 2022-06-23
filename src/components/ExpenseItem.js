import './ExpenseItem.css';

function ExpenseItem(){
    const expenseDate = new Date(2022, 6, 22);
    const expenseTitle = 'Fishing rod';
    const expenseAmount = 299.95;

    console.log(expenseDate);

    return (
            <div className="expense-item">
                <div>{expenseDate.toISOString()}</div>
                <div className="expense-item__description">
                    <h2>{expenseTitle}</h2>
                    <div className="expense-item__price">${expenseAmount}</div>
                </div>
            </div>
    );
}

export default ExpenseItem;