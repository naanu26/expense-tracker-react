import React, {useContext} from 'react'
import {GlobalContext} from '../context/state';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc+= item), 0).toFixed(2);        //reduce  function will calculate the result
                                                                                //toFixed is used to roundup to the 2 decimal places
    return (

        <React.Fragment>        
            <h4>Amount Spent</h4>
            <h1>Rs.{total}</h1>
        </React.Fragment>
    )
}
