import React, {useContext} from 'react'
import { GlobalContext} from '../context/state';
import '../App.css'
export const Transaction = (props) => {
    const { deleteTransaction } = useContext(GlobalContext);

    return (
        <li className='plus'> 
            {props.transaction.text}  <span id="rupees">Rs.{Math.abs(props.transaction.amount)}</span>
            <button onClick={() => deleteTransaction(props.transaction.id)} className="delete-btn">X</button>
        </li>
    )
}
