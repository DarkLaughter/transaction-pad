import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const CheckBookDisplay = () => {
    const { transactions } = useContext(GlobalContext)
    const amountsArray = transactions.map(transaction => transaction.amount)
    const income = amountsArray.filter(amt => amt > 0).reduce((total, amount) => (total += amount), 0).toFixed(2)
    const expenses = amountsArray.filter(amt => amt < 0).reduce((total, amount) => (total += amount),0).toFixed(2)

    return (
        <div className="display-container" >
            <div>
                <h4>Income</h4>
                <p className="money plus">{income}</p>
            </div>
            <div>
                <h4>Expenses</h4>
    <p className='money minus'>{expenses}</p>
            </div>
        </div>
    )
}

export default CheckBookDisplay
