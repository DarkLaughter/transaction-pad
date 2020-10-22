import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

const Transactions = () => {
    const { transactions, deleteTransaction } = useContext(GlobalContext)
    
    const transArray = transactions.map(transaction => {
        const {id, amount, text} = transaction
        const value = amount < 0 ? '-' : '+';
        const amountAbs = Math.abs(amount)

        return <li className={amount < 0 ? 'minus' : 'plus'} key={id} id={id}>{text}
            <span>{value}${amountAbs}</span>
            <button className="delete-btn" onClick={() => deleteTransaction(id)}>x</button>
        </li>
    })


    return (
        <div>
            <h3>History</h3>
                <ul id="list" className="list">
                    {transArray}
                </ul>
        </div>
    )
}

export default Transactions
