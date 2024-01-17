import { GlobalProvider } from '../CONTEXT/GlobalState';
import AddTransaction from "../COMP/AddTransaction"
import Balance from "../COMP/Balance"
import Header from "../COMP/Header"
import IncomeExpenses from "../COMP/IncomeExpenses"
import TransactionList from "../COMP/TransactionList"

import "./traker.css"
import styles from "../Login/styles.module.css"
import { Link } from 'react-router-dom';

function Traker() {
    return (
        <GlobalProvider>
            <Header />
            <div className='container'>
                <div className='butflex'>
                    <button type="submit" className={styles.green_btn}>
                        <Link className={styles.green_btn} to="/login">Logout</Link>
                    </button>
                    <Balance/>
                </div>
                <IncomeExpenses />
                <TransactionList />
                <AddTransaction />
            </div>

        </GlobalProvider>
    );
}

export default Traker

