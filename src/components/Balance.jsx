import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
    const { transactions } = useContext(GlobalContext)
    const amtsArray = transactions.map(transaction => transaction.amount)
    const balance = amtsArray.reduce((total, amount) => total + amount,0).toFixed(2)

    const center = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    }

    return (
        <div style={center}>
            <h4>Your Balance</h4> 
            <h1>${balance}</h1>
        </div>
    )
}

export default Balance
