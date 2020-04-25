import React, {useState, useContext} from 'react';
import {GlobalContext} from '../context/state';
import '../App.css'

export const AddTransaction = () => {

    const [text, setText] = useState(' ');
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 10000),
            text,
            amount: +amount  //convert a string to int i.e why use +
        }

        addTransaction(newTransaction);
    }
    return (
        <div>
            <h3>Add New Expense</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text"><span>Expense</span></label>
                    <input 
                        type="text" 
                        value={text} 
                        onChange={(event) => setText(event.target.value)} 
                        placeholder="Your Expense" 
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="amount"><span>Amount</span></label>
                    <input 
                        type="number" 
                        value={amount} 
                        onChange={(event) => setAmount(event.target.value)} 
                        placeholder="Expense Cost" 
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="text"><span>Day</span></label>
                    <input 
                        type="text" 
                        placeholder="on which day" 
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="text"><span>Month</span></label>
                    <input 
                        type="text" 
                        placeholder="on which month" 
                    />
                </div>

                <button className="btn">Add Transaction</button>
            </form>
        </div>
    );
}
