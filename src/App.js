import React from 'react'
import Header from './components/Header'
import Balance from './components/Balance'
import CheckBookDisplay from './components/CheckBookDisplay.jsx'
import Transactions from "./components/Transactions";
import EntryForm from "./components/EntryForm";
import {GlobalProvider} from './context/GlobalState'
import './App.css'

const App = () => {
    return (
        <GlobalProvider>
        <div className="app-container">
            <Header />
            <div className="container" >
                <Balance />
                <CheckBookDisplay />
                <Transactions />
                <EntryForm />
            </div>
        </div>
        </GlobalProvider>
    )
}

export default App
