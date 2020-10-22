import React from 'react'
import Header from './components/Header'
import Balance from './components/Balance'
import CheckBookDisplay from './components/CheckBookDisplay'
import './App.css'

const App = () => {
    return (
        <div>
            <Header />
            <div className="container" >
                <Balance />
                <CheckBookDisplay/>
            </div>
        </div>
    )
}

export default App
